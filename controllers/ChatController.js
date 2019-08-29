import Utils from '../Utils'
import PubNub from 'pubnub';
import EmbedlyController from '../controllers/EmbedlyController'
import UserController from '../controllers/UserController';
import ActivityController from './ActivityController';


const uuidv4 = require('uuid/v4');

let _channel;
 
var pubnub = new PubNub({
    subscribeKey: "sub-c-e6369932-7eef-11e8-a4a6-464114960942",
    publishKey: "pub-c-efc8bbd5-ac38-4178-8802-78cf700ff715",
    secretKey: "sec-c-ZWViYjM5NjgtNTRkMS00YWYyLTliZTMtZWVhMWEwMTQ4N2Fl",
    ssl: true
})

subscribe = (listener) => {

}

unsubscribe = (listener) => {

}

join = (channel) =>{
    _channel = channel;

    pubnub.subscribe([channel])
}

leave = (channel) =>{
    pubnub.unsubscribe([channel])
}

async function publish(messageTex, metadata, type){
    let message = {
        message: messageTex,
        timestamp: Math.floor(Date.now() / 1000),
        uuid: uuidv4(),
        from: UserController.getUser().id,
        to: _channel,
    };

    if(metadata && type){
        message.metadataType = type
        message.metadata = metadata
    }

    let response = await pubnub.publish({
        message: message,
        channel: _channel,
    })

    return response;
}

async function loadHistory(){
    let response = await pubnub.history({
        channel: _channel,
        count: 20, 
    })
    return response;
}

function prepareMessage(messageText){
    let matches = Utils.extractURL(messageText);
    if(matches && matches.length > 0){
        let urlString = matches[0];
        if(Utils.isValidUrl(urlString)){
            EmbedlyController.getMetadataFromLink(urlString).then((metadata) => {
                let metadataType = 'link'
                publish(messageText, metadata, metadataType).then((response) => {
                    if(response.timetoken){
                        ActivityController.createActivity(_channel, messageText, metadata, metadataType, 'user')
                    }
                })
            })
        }
    }else{
        publish(messageText, null, null).then((response) => {
            if(response.timetoken){

            }
        })
    }
}



function prepareMessages(dataSource){
    let results = []
    let messages = dataSource.messages;

    messages.forEach(element => {
        let entry = element.entry;
        let from = entry.from;
        let user = UserController.getUserFromId(from)
        let nickname = user.nickname;
        let avatar = user.avatar;
        let timestamp = entry.timestamp;
        let metadata = entry.metadata;
        let message = {
            _id: entry.uuid,
            text: entry.message,
            createdAt: new Date(1000 * timestamp),
            user: {
                _id: from,
                name: nickname,
                avatar: avatar,
            }
        };

        if(metadata){
            if(metadata.images){
                let images = metadata.images;
                if (images.length > 0){
                    let image = images[0]
                    if (image.url){
                        message.thumbnail = image.url;
                    }
                }
            }
            let title = metadata.title
            let subtile = metadata.provider_url
            let description = metadata.description

            if (title === 'null' || title == null)
                title = metadata.provider_name

            if (subtile === 'null' || subtile == null)
                subtile = metadata.provider_url

            message.title = title
            message.subtitle = subtile;
            message.description = description
        }

        results.push(message)
    });
    return results;
}



export default {prepareMessage, join, leave, loadHistory, prepareMessages, subscribe, unsubscribe}