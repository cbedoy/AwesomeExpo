let userToken = ''
let streamId = ''
let streamKey = ''
let loginRef = null;

hasSession = () => {
    return userToken !== ''
}

subscribe = (loginRef) => {
    this.loginRef = loginRef
}

unsubscribe = (loginRef) => {
    this.loginRef = null
}

putSession = (response) => {
    this.streamId = response.streamID
    this.streamKey = response.streamKey
    this.userToken = response.userToken

    this.loginRef.setState({
        streamId: this.streamId,
        streamKey: this.streamKey,
        userToken: this.userToken,
        session: true,
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

export default {
    hasSession, 
    putSession, 
    subscribe, 
    unsubscribe, 
    getStreamId, 
    getStreamKey, 
    getUserToken, 
}