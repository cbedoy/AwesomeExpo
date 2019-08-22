import session from '../core/Session'
import college from '../core/College'

setUserId = (id, college) => {
    session.id = id;
    session.college = college;
}

setData = (data) => {
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
    users.sort((userOne, userTwo) => 
        userOne.nickname[0] > userTwo.nickname[0]
    );
    
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

query = (text) =>  {
    let users = getCollege();
    let queryUsers = [];

    users.forEach(element => {
        let nickname = element.nickname;
        let email = element.email;
        email = email.replace('@dagm8.com', '');
        if(nickname !== null){
            nickname = nickname.toLowerCase();
            if(nickname.includes(text) || email.includes(text)){
                queryUsers.push(element)
            }
        }
    });
    return queryUsers;
}

export default {
    setUserId, 
    setData, 
    setChannels,  
    getUser,
    setCollege,
    getCollege,
    getUserFromId, 
    query
}