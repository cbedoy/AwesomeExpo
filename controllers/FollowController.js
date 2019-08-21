let stream = require('getstream');
import UserController from './UserController'
import API from './APIController'
import Global from '../core/Global'
 
follow = (user) => {
    let userId = UserController.getUser().id;
    let streamKey = Global.getStreamKey();
    let streamId = Global.getStreamId();

    let client = stream.connect(streamKey, null, streamId);

    let type = 'user';

    API.getFeedToken(type, userId).then((response) => {
        let feedToken = response.feedToken;

        let feed = client.feed(type, userId, feedToken);

        feed.follow(type, user).then((response) => {
            console.log(response);
        })
    });
}

unfollow = (user) => {
    let userId = UserController.getUser().id;
    let streamKey = Global.getStreamKey();
    let streamId = Global.getStreamId();

    let client = stream.connect(streamKey, null, streamId);

    API.getFeedToken(type, userId).then((response) => {
        let feedToken = response.feedToken;

        let feed = client.feed(type, userId, feedToken);

        feed.unfollow('timeline', user).then((response) => {
            console.log(response);
        })
    });
}

export default {follow, unfollow}