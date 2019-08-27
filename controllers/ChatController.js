import Utils from '../Utils'
import PubNub from 'pubnub';
import EmbedlyController from '../controllers/EmbedlyController'
import UserController from '../controllers/UserController';

const uuidv4 = require('uuid/v4');

let _channel;
 
var pubnub = new PubNub({
    subscribeKey: "sub-c-e6369932-7eef-11e8-a4a6-464114960942",
    publishKey: "pub-c-efc8bbd5-ac38-4178-8802-78cf700ff715",
    secretKey: "sec-c-ZWViYjM5NjgtNTRkMS00YWYyLTliZTMtZWVhMWEwMTQ4N2Fl",
    ssl: true
})


join = (channel) =>{
    _channel = channel;

    pubnub.subscribe([channel])
}

leave = (channel) =>{
    pubnub.unsubscribe([channel])
}

publish = (messageTex, metadata, type) => {
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

    pubnub.publish({
        message: message,
        channel: _channel,
    }, function (status, response){
        console.log(status)
        console.log(response)
    })
}

async function loadHistory(){
    let response = await pubnub.history({
        channel: _channel,
        count: 20, 
    })
    return response;
}

function prepareMessage(messageText){
    if(Utils.isValidUrl(messageText)){
        EmbedlyController.getMetadataFromLink(messageText).then((metadata) => {
            publish(messageText, metadata, 'link')
        })
    }else{
        publish(messageText, null, null);
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

        results.push(message)
    });
    return results;
}



export default {prepareMessage, join, leave, loadHistory, prepareMessages}