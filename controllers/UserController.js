import session from '../core/Session'
import college from '../core/College'

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

setCollege = (users) => {
    let pekUsers = []
    users.sort((userOne, userTwo) => 
        userOne.nickname[0] > userTwo.nickname[0]
    );
    users.forEach(element => {
        let nickname = element.nickname.toLowerCase();
        if(nickname.includes('kar') || nickname.includes('nes') || nickname.includes('car')){
            pekUsers.push(element)
        }
    });

    college.users = pekUsers;
}

getCollege = () => {
    return college.users;
}

shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


export default {
    setUserId, 
    setData, 
    setChannels,  
    getUser,
    setCollege,
    getCollege,
}