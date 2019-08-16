
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

export default {hasSession, putSession, subscribe}