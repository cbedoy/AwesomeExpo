import React from 'react';
import URLProviders from '../providers/URLProviders'

const API = "https://api.embedly.com";
const key = 'e33332a0146045eea14b082e9f39e90e'

async function getMetadataFromLink(link) {
    let URL = API + '/1/extract?url='+link+'&key='+key;

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

async function getMetadataFromRandomLink() {
    let urls = URLProviders.videosURL
    let targetUrl = urls[Math.floor(Math.random() * urls.length)]

    let URL = API + '/1/extract?url='+targetUrl+'&key='+key;

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

export default {getMetadataFromLink, getMetadataFromRandomLink}