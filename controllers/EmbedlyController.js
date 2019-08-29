import React from 'react';
import URLProviders from '../providers/URLProviders'

const API = "https://api.embedly.com";
const key = 'e33332a0146045eea14b082e9f39e90e'
const removedKeys = [
    'authors',
    'cache_age',
    'entities',
    'favicon_colors',
    'keywords',
    'language',
    'lead',
    'media',
    'offset',
    'related',
    'app_links'
]

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
        let json = await response.json();

        removedKeys.forEach(key => {
            delete json[key]
        });

        return json;
    }catch(error){
        console.error(error);
    }
}

async function getMetadataFromRandomLink() {
    let urls = URLProviders.urls
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