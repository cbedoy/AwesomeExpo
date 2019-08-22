let stream = require('getstream');
import UserController from './UserController'
import API from './APIController'
import Global from '../core/Global'

function following(){
    let userId = UserController.getUser().id;
    let streamKey = Global.getStreamKey();
    let streamId = Global.getStreamId();
    let type = 'user';

    let client = stream.connect(streamKey, null, streamId);

    API.getFeedToken(type, userId).then((response) => {
        let feedToken = response.feedToken;
        let feed = client.feed(type, userId, feedToken);

        console.log(response)

        feed.following({limit: 25, offset: 0}).then((response) => {

            console.log(response)

            return response.results;
        });
    });
}

export default {following}