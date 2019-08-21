import session from '../core/Session'

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
    setUserId, 
    setData, 
    setChannels,  
    getUser
}