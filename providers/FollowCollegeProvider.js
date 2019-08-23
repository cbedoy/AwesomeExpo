import Follow from '../core/Follow'
import College from '../core/College'

function getCollegeWithFollow(){
    let users = College.users;
    let followers = Follow.followers;
    let following = Follow.following;

    following.forEach(element => {
        let user = users.find(it => it.id == element);

        if(user !== null){
            user.following = true
        }
    });

    followers.forEach(element => {
        let user = users.find(it => it.id == element);

        if(user !== null){
            user.followingYou = true
        }
    });
    
    return users;
}

export default {getCollegeWithFollow}