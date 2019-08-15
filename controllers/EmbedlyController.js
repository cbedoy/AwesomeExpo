import React from 'react';

const API = "https://api.embedly.com";

async function getMetadataFromLink(link) {
    let key = 'e33332a0146045eea14b082e9f39e90e'
    let URL = API + '/1/extract?url='+link+'&key='+key;

    console.log("getMetadataFromLink")
    console.log(URL)

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

export default {getMetadataFromLink}