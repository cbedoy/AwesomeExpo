import session from '../core/Session'
import college from '../core/College'

setUserId = (id, college) => {
    session.id = id;
    session.college = college;
}

setData = (data) => {
    console.log('setData')
    session.firstName = data.firstName;
    session.lastName = data.lastName;
    session.avatar = data.avatar;
    session.nickname = data.nickname;
}

setChannels = (channels) => {
    session.channels = channels;
}

getUser = () => {
    return session;
}

setCollege = (users) => {
    //let peekUsers = []
    //let peekDictionary = {}
    users.sort((userOne, userTwo) => 
        userOne.nickname[0] > userTwo.nickname[0]
    );
    //users.forEach(element => {
    //    let nickname = element.nickname.toLowerCase();
    //    if(nickname.includes('kar') || nickname.includes('nes') || nickname.includes('car') || nickname.includes('and')){
    //        peekUsers.push(element)
    //
    //        peekDictionary[element.id] = element;
    //    }
    //});

    let usersMap = {};
    users.forEach(element => {
        usersMap[element.id] = element;
    });

    college.users = users;
    college.usersMap = usersMap;
}

getCollege = () => {
    return college.users;
}

getUserFromId = (userId) => {
    console.log(userId)

    if(college.usersMap[userId]){
        return college.usersMap[userId];
    }else{
        return session
    }
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
    getUserFromId
}