import React from 'react';

const API = "http://ec2-52-8-197-192.us-west-1.compute.amazonaws.com:10010/api";

async function getUserToken(nickname) {
    let URL = API + '/stream/usertoken/'+nickname;
    try{
        let response = await fetch(URL,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        let responseJson = await response.json();
        return responseJson;
    }catch(error){
        console.error(error);
    }
}

async function getFeedToken(feedSlug, nickname){
    let URL = API + '/stream/feedtoken/'+feedSlug+'/'+nickname;
    try{
        let response = await fetch(URL,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        let responseJson = await response.json();
        return responseJson;
    }catch(error){
        console.error(error);
    }
}

export default {getUserToken, getFeedToken}