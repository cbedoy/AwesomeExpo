import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

const THUMBNAIL_URL = 'PLACEHOLDER'

//Change colors if needed.
const HTML_COLOR = '#00bdd4'
const IMAGE_COLOR = '#ffda48'
const VIDEO_COLOR = '#3ecf9e'
const AUDIO_COLOR = '#ff7546'
const DOCUMENT_COLOR = '#ff7546'

//There are images with 100x100 pixels. 
//Please replace for expected.
const HTML_ICON = require('../images/content/html.png')
const AUDIO_ICON = require('../images/content/audio.png')
const DOCUMENT_ICON = require('../images/content/document.png')
const PLACEHOLDER_ICON = require('../images/content/placeholder.png')
const VIDEO_ICON = require('../images/content/video.png')

const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);

export default class LinkContentView extends Component {
    render() {
        let metadata = this.props.activity.metadata;

        let images = metadata.images
        let imageURL = THUMBNAIL_URL
        let type = metadata.type
        let description = metadata.description
        let title = metadata.title
        let subtile = metadata.provider_url
        if (images.length > 0){
            let image = images[0]
            if (image.url){
                imageURL = image.url
            }
        }else if(images.length === 0 && type === 'image'){
            imageURL = metadata.url
        }

        if (title === 'null' || title == null)
            title = metadata.provider_name

        if (subtile === 'null' || subtile == null)
            subtile = metadata.provider_url

        return (
            <View style={[styles.root]}>
                <Image
                    source={this.loadImage(imageURL, metadata)}
                    style={this.thumbnailStyle(imageURL, metadata)}
                />
                <View style={styles.bodyContent}>
                    <Text style={styles.titleStyle}>{title}</Text>
                    <Text style={styles.subtitleStyle}>{subtile}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>
                         {description}
                    </Text>
                </View>
            </View>
        );
    }

    loadImage = (imageURL, metadata) => {
        if (imageURL === THUMBNAIL_URL)
            return this.imageIcon(metadata)
        else
            return {uri: imageURL}
    }

    imageIcon = (metadata) => {
        switch(metadata.type){
            case 'html':
                return HTML_ICON
            case 'image':
                return PLACEHOLDER_ICON
            case 'video':
                return VIDEO_ICON
            case 'audio':
                return AUDIO_ICON
            case 'text':
            case 'xml':
            case 'json':
            case 'ppt':
                return DOCUMENT_ICON
            default:
                return HTML_ICON
        }
    }

    thumbnailStyle = (imageURL, metadata) => {
        return {
            width: SCREEN_WIDTH,
            resizeMode: this.imageMode(imageURL),
            backgroundColor: this.cardColor(imageURL, metadata),
            minHeight: 224,
        }
    }

    /*
    imageHeight = (metadata) => {
        let images = metadata.images

        if (images.length > 0){
            let image = images[0];

            let width = image.width;
            let height = image.width;
            let _height = (width / height) * SCREEN_WIDTH
            console.log(_height)
            return _height
        }
        return 210
    }
    */

    imageMode = (imageURL) => {
        if (imageURL === THUMBNAIL_URL)
            return 'center'
        else 
            return 'cover'
    }

    cardColor = (imageURL, metadata) => {
        if(imageURL !== THUMBNAIL_URL)
            return '#FAFAFA'

        switch(metadata.type){
            case 'html':
                return HTML_COLOR
            case 'image':
                return IMAGE_COLOR
            case 'video':
                return VIDEO_COLOR
            case 'audio':
                return AUDIO_COLOR
            case 'text':
            case 'xml':
            case 'json':
            case 'ppt':
                return DOCUMENT_COLOR
            default:
                return HTML_COLOR
        }
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#FFF",
        flexWrap: "nowrap",
        shadowColor: "#000",
        overflow: "hidden"
    },
    bodyContent: {
        justifyContent: "center",
        padding: 16,
        paddingTop: 24
    },
    titleStyle: {
        color: "#000",
        fontSize: 24,
    },
    subtitleStyle: {
        color: "#000",
        opacity: 0.5,
        fontSize: 14,
        lineHeight: 16,
    },
    body: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16
    },
    bodyText: {
        color: "#424242",
        fontSize: 14,
        lineHeight: 20,
    }
});
