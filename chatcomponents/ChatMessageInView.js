import React from 'react'
import {View, Image, Text} from 'react-native'
import ChatStyles from './ChatMessageStyles'
import TimeAgo from 'react-native-timeago';


export default class ChatMessageInView extends React.Component{
    
    render(){
        let styles = ChatStyles.styles;
        let dataSource = this.props.currentMessage;
        let user = dataSource.user;
        let messageText = dataSource.text;
        let thumbnail = dataSource.thumbnail;
        let title = dataSource.title;
        let subtitle = dataSource.description;
        let createdAt = dataSource.createdAt;

        let nextMessage = dataSource.nextMessage;

        let thumnailView;
        let titleView;
        let subtitleView;
        let avatarView;

        if(thumbnail){
            thumnailView = <Image 
                                style={styles.thumbnailIn}
                                source={{uri: thumbnail}}
                            />
        }

        if(title){
            titleView = <Text style={styles.titleIn}>{title}</Text>
        }

        if(subtitle){
            subtitleView = <Text style={styles.descriptionIn}>{subtitle}</Text> 
        }

        avatarView = <Image 
                            style={styles.avatar}
                            source={{uri: user.avatar}}
                        />

        return(
            <View style={styles.containerIn}>
                {avatarView}
                <View style={styles.messageContainerIn}>
                    <Text style={styles.messageIn}>{messageText}</Text>
                    <View style={styles.mediaContainer}>
                        {thumnailView}
                        {titleView}
                        {subtitleView}
                    </View> 
                    <Text style={styles.timeAgo}><TimeAgo time={createdAt}/></Text>
                </View>
            </View>
        );
    }
}

