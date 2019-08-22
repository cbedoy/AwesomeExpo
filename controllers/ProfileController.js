let stream = require('getstream');
import UserController from './UserController'
import API from './APIController'
import Global from '../core/Global'

async function following(){
    let userId = UserController.getUser().id;
    let streamKey = Global.getStreamKey();
    let streamId = Global.getStreamId();
    let type = 'user';
    let client = stream.connect(streamKey, null, streamId);

    let feedResponse = await API.getFeedToken(type, userId);
    let feedToken = feedResponse.feedToken;
    let feed = client.feed(type, userId, feedToken);
    let result = await feed.following({limit: 25, offset: 0});

    return result;
}

async function followers(){
    let userId = UserController.getUser().id;
    let streamKey = Global.getStreamKey();
    let streamId = Global.getStreamId();
    let type = 'user';
    let client = stream.connect(streamKey, null, streamId);

    let feedResponse = await API.getFeedToken(type, userId);
    let feedToken = feedResponse.feedToken;
    let feed = client.feed(type, userId, feedToken);
    let result = await feed.followers({limit: 25, offset: 0});

    return result;
}


export default {following, followers}