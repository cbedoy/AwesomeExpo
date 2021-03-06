import {Platform, StyleSheet} from 'react-native';

export const APPBAR_HEIGHT = Platform.select({
    ios: 100,
    android: 100,
    default: 64,
});

export const users = ["alex", "vanessa", "system", "carlos", "native"];

export const avatars = [
    "https://avatars1.githubusercontent.com/u/6551029?s=460&v=4",
    "https://avatars1.githubusercontent.com/u/3089882?s=460&v=4",
    "https://avatars1.githubusercontent.com/u/89638?s=460&v=4",
    "https://avatars0.githubusercontent.com/u/5570799?s=460&v=4",
    "https://avatars1.githubusercontent.com/u/5710346?s=88&v=4",
];

function avatarFromNickname(nickname) {
    let index = users.indexOf(nickname);
    if(index != -1)
        return avatars[index];
    return "https://avatars2.githubusercontent.com/u/3019167?s=460&v=4"
}

function isValidUrl(url){
    var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
}

function extractURL(text){
    return text.match(/\bhttps?:\/\/\S+/gi);
}

export default {avatarFromNickname, isValidUrl, extractURL}