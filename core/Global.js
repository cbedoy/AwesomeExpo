
let userToken = ''
let streamId = ''
let streamKey = ''
let user = ''

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

setUser = (nickname) => {
    this.user = nickname;
}

getUser = () => {
    return this.user;
}

export default {hasSession, putSession, subscribe, unsubscribe, 
    setUser, getStreamId, getStreamKey, getUserToken, getUser}