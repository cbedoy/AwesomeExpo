import {StyleSheet} from 'react-native'
import Colors from '../core/Colors'

const commonPadding = 8
const textSize = 16
const avatarSize = 40

const styles = StyleSheet.create({
    eventContainer :{
        flex: 1,
    },
    containerIn: {
        flexDirection: 'row'
    },
    containerOut: {
        flexDirection: 'row-reverse'
    },
    avatar:{
        margin: commonPadding,
        height: avatarSize,
        width: avatarSize,
        borderRadius: 20,
    },
    thumbnailIn:{
        marginTop: 8,
        marginLeft: 8,
        marginBottom: 8,
        aspectRatio: 1, 
        borderRadius: commonPadding,
    },
    messageContainerIn: {
        padding: commonPadding,
        marginTop: commonPadding,
        marginRight: 64,
        marginLeft: 8,
        marginBottom: commonPadding,
        borderRadius: commonPadding,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        backgroundColor: Colors.backgroundMessageColor,
    },
    messageContainerOut: {
        padding: commonPadding,
        marginTop: commonPadding,
        marginRight: commonPadding * 2,
        marginLeft: 64,
        marginBottom: commonPadding,
        borderRadius: commonPadding,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        backgroundColor: Colors.backgroundMessageOutColor,
    },
    messageIn: {
        color: '#333',
        fontSize: textSize,
    },
    messageOut: {
        color: '#333',
        fontSize: textSize,
    },
    eventMessage : {
        color: '#999',
        fontSize: textSize,
        paddingTop: commonPadding * 2,
        paddingBottom: commonPadding * 2,
        textAlign: 'center'
    },
    mediaContainer : {
        marginTop: 8,
        marginRight: 64,
    },
    titleIn : {
        fontSize: 16,
        color: '#333',
        marginTop: commonPadding,
        marginLeft: commonPadding,
        marginRight: commonPadding,
    },
    titleOut : {
        fontSize: 16,
        color: '#333',
        marginTop: commonPadding,
        marginLeft: commonPadding,
        marginRight: commonPadding,
    },
    descriptionIn : {
        fontSize: 14,
        color: '#666',
        marginTop: commonPadding,
        marginLeft: commonPadding,
        marginRight: commonPadding,
    },
    descriptionOut : {
        fontSize: 14,
        color: '#666',
        marginTop: commonPadding,
        marginLeft: commonPadding,
        marginRight: commonPadding,
    },
    timeAgo : {
        color: 'rgba(0,0,0,0.4)',
        fontSize: 12,
        marginTop: commonPadding,
        textAlign: 'right'
    }
})

export default {styles}