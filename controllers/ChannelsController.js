import ChannelItem from '../components/ChannelItem'
import UserController from '../controllers/UserController'
import APIController from '../controllers/APIController'


async function prepareChannels() {
    let userId = UserController.getUser().id;

    var channels = [];

    let response = await APIController.getChannelsData(userId);
    let sessionId = UserController.getUser().id;
    response.forEach(channel => {
        let type = channel.type;
        if(type !== 'p2p'){
            let channelId = channel.id;
            let description = channel.description;
            let avatar = channel.avatar

            if(avatar !== null){
                channels.push({
                    id: channelId,
                    name: description,
                    avatar: avatar,
                    selected: false,
                    metadata : {}
                })
            }else{
                channels.push({
                    id: channelId,
                    name: description,
                    selected: false,
                    metadata: {
                        abbreviation: description.substring(0,4),
                    }
                })
            }
        }else {
            let channelId = channel.id;
            let description = channel.description;
            let avatar = channel.avatar
            let components = description.split(' and ');

            components.forEach(element => {
                if(element !== sessionId){
                    let userInfo = UserController.getUserFromId(element);
                    description = userInfo.nickname;
                    avatar = userInfo.avatar;

                    if(avatar !== null){
                        channels.push({
                            id: channelId,
                            name: description,
                            avatar: avatar,
                            selected: false,
                            metadata : {}
                        })
                    }
                }
            });
        }
    });
    return channels;
}


export default {prepareChannels}