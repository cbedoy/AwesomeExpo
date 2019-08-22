import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import TimeAgo from 'react-native-timeago';
import Utils from '../Utils'
import UserController from '../controllers/UserController'

export default class ExplorerHeaderView extends Component {
    render() {
        let activity = this.props.activity; 
        let userInfo = UserController.getUserFromId(activity.actor);
        return (
            <View style={styles.root}>
                <View style={styles.headerStyle}>
                    <Image
                        source={{ uri: userInfo.avatar }}
                        style={styles.avatarImage}
                    />
                    <View style={styles.headerContent}>
                        <Text style={styles.nicknameStyle} numberOfLines={1}>{userInfo.nickname}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={this.favIconFromActivity(activity)}
                                style={styles.favIconImage}
                            />
                            <Text style={styles.shareStyle} numberOfLines={1} >{this.titleFromActivity(activity)}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require('../images/icons/time.png')}
                                style={styles.timeIconImage}
                            />
                            <Text style={styles.dateStyle} numberOfLines={1}><TimeAgo time={activity.time}/></Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    titleFromActivity = (activity) => {
        let shareOn = this.titleFromType(activity)
        
        return shareOn + "General Room"
    }

    titleFromType = (activity) => {
        let type = activity.metadataType;
        switch(activity.metadataType){
            case 'whatsgood':
                return 'WhatsGood Shared on '
            case 'link' :
                return 'Link Shared on '
            case 'file' : 
                return 'File Shared on '
            default:
                return 'Document Shared on '
        }
    }

    favIconFromActivity = (activity) => {
        try{
            let favicon = activity.metadata.favicon_url;
            if(favicon === 'null' || favicon === null)
                return this.imageIcon(activity.metadata)
            else 
                return {uri: favicon}
        }catch(e){
            return require('../images/icons/html.png')
        }
    }

    imageIcon = (metadata) => {
        switch(metadata.type){
            case 'html':
                return require('../images/icons/html.png')
            case 'image':
                return require('../images/icons/image.png')
            case 'video':
                return require('../images/icons/video.png')
            case 'text':
            case 'xml':
            case 'json':
            case 'ppt':
                return require('../images/icons/document.png')
            default:
                return require('../images/icons/html.png')
        }
    }
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        flexDirection: "row",
        alignItems: "center",
        padding: 16
    },
    headerStyle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    avatarImage: {
        width: 56,
        height: 56,
        backgroundColor: "#CCC",
        borderRadius: 8
    },
    favIconImage: {
        width: 12,
        height: 12,
        resizeMode: 'stretch',
        marginRight: 4,
        marginTop: 4,
        marginBottom: 4
    },
    timeIconImage: {
        width: 12,
        height: 12,
        marginRight: 4,
    },
    headerContent: {
        justifyContent: "center",
        paddingLeft: 16
    },
    nicknameStyle: {
        color: "#000",
        fontSize: 20,
        lineHeight: 20
    },
    shareStyle: {
        color: "#000",
        opacity: 0.5,
        fontSize: 12,
        lineHeight: 20
    },
    dateStyle: {
        color: "#000",
        opacity: 0.5,
        fontSize: 12,
        lineHeight: 12
    }
});