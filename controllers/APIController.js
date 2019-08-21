import Global from '../core/Global'

const API = "http://ec2-52-8-197-192.us-west-1.compute.amazonaws.com:10010/api";

async function getUserToken() {
    let identifier = Global.getUser().id;
    let URL = API + '/stream/usertoken/'+identifier;
    console.log(identifier)

    try{
        let response = await fetch(URL,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        let responseJson = await response.json();
        return responseJson;
    }catch(error){
        console.error(error);
    }
}

async function getFeedToken(feedSlug, nickname){
    let URL = API + '/stream/feedtoken/'+feedSlug+'/'+nickname;
    try{
        let response = await fetch(URL,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        let responseJson = await response.json();
        return responseJson;
    }catch(error){
        console.error(error);
    }
}

async function signin(email){
    let URL = API + '/signin?email='+email+'&keyOnly=true'
    try{
        let response = await fetch(URL,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        let responseJson = await response.json();
        let _url = responseJson['url']
        let components = _url.split('/');
        let token = components[components.length -1];

        console.log('SIGN')

        await auth(token)
    }catch(error){
        console.error(error);
    }
}

async function auth(token){
    console.log('AUTH')
    let URL = API + '/auth/'+token
    try{
        let response = await fetch(URL,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        let responseJson = await response.json();
        let college = responseJson['college']
        let id = responseJson['jid']

        Global.setUserId(id, college)

        await getUser(id)
    }catch(error){
        console.error(error);
    }
}

async function getUser(identifier){
    let URL = API + '/user/'+identifier
    try{
        let response = await fetch(URL,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        let responseJson = await response.json();

        let avatar = responseJson['avatar'];
        let firstName = responseJson['firstName'];
        let lastName = responseJson['lastName'];
        let name = responseJson['name'];

        let data = {
            avatar: avatar,
            firstName: firstName,
            lastName: lastName,
            nickname: name
        };

        console.log(data);
        Global.setData(data)
        
        await getChannels(identifier)

    }catch(error){
        console.error(error);
    }
}

async function getChannels(identifier){
    let URL = API + '/user/'+identifier+'/conversations'
    try{
        let response = await fetch(URL,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        let channels = [];
        let responseJson = await response.json();
        responseJson.forEach((channel) => {
            channels.push(channel.id);
        });

        Global.setChannels(channels);

        return {
            status: true,
        }

    }catch(error){
        console.error(error);
    }
}

async function getChannelsData(identifier){
    let URL = API + '/user/'+identifier+'/conversations'
    try{
        let response = await fetch(URL,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        let responseJson = await response.json();
        return responseJson;
    }catch(error){
        console.error(error);
    }
}

export default {getUserToken, getFeedToken, signin, getChannelsData}