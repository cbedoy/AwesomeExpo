import session from './Session'

let userToken = ''
let streamId = ''
let streamKey = ''
let observers = [];

hasSession = () => {
    return userToken !== ''
}

subscribe = (observer) => {
    if(!observers.includes(observer))
        observers.push(observer);
}

unsubscribe = (observer) => {
    if(observers.includes(observer))
        observers.pop(observer);
}

putSession = (response) => {
    this.streamId = response.streamID
    this.streamKey = response.streamKey
    this.userToken = response.userToken

    observers.forEach((entry) => {
        entry.setState({
            streamId: this.streamId,
            streamKey: this.streamKey,
            userToken: this.userToken,
            session: true,
        })
    })
}

getStreamId = () => {
    return this.streamId;
}

getStreamKey = () => {
    return this.streamKey;
}

getUserToken = () => {
    return this.userToken;
}

setUserId = (id, college) => {
    session.id = id;
    session.college = college;

    console.log(session)
}

setData = (data) => {
    console.log('setData')
    session.firstName = data.firstName;
    session.lastName = data.lastName;
    session.avatar = data.avatar;
    session.nickname = data.nickname;

    console.log(session)
}

setChannels = (channels) => {
    session.channels = channels;
    console.log(session)
}

getUser = () => {
    return session;
}

export default {
    hasSession, 
    putSession, 
    subscribe, 
    unsubscribe, 
    setUserId, 
    setData, 
    setChannels,  
    getStreamId, 
    getStreamKey, 
    getUserToken, 
    getUser
}