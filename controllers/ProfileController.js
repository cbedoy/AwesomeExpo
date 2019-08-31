let stream = require('getstream');
import UserController from './UserController'
import API from './APIController'
import Global from '../core/Global'
import Follow from '../core/Follow'

async function following(){
    let userId = UserController.getUser().id;
    let streamKey = Global.getStreamKey();
    let streamId = Global.getStreamId();
    let type = 'user';
    let client = stream.connect(streamKey, null, streamId);

    let feedResponse = await API.getFeedToken(type, userId);
    let feedToken = feedResponse.feedToken;
    let feed = client.feed(type, userId, feedToken);
    let response = await feed.following({limit: 25, offset: 0});

    setFollowing(response.results)

    return response;
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
    let response = await feed.followers({limit: 25, offset: 0});

    setFollowers(response.results)

    return response;
}

async function posts(){
    let userId = UserController.getUser().id;
    let streamKey = Global.getStreamKey();
    let streamId = Global.getStreamId();
    let client = stream.connect(streamKey, null, streamId);
    let type = 'user';

    let feedResponse = await API.getFeedToken(type, userId);
    let feedToken = feedResponse.feedToken;
    let feed = client.feed(type, userId, feedToken);

    let response = await feed.get();

    console.log(response)
}

function setFollowers(results){
    Follow.followers = getUserListFromResults(results);
}
function setFollowing(results){
    Follow.following = getUserListFromResults(results);
}

function getUserListFromResults(results){
    let users = [];

    results.forEach(element => {
        let target = element.target_id;
        let components = target.split(':')
        let userId = components[components.length -1];

        users.push(userId);
    });

    return users;
}

function getFollowInfo(){
    return Follow;
}


export default {following, followers, getFollowInfo, posts}