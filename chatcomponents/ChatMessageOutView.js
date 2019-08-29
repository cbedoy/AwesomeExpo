import React from 'react'
import {View, Image, Text} from 'react-native'
import ChatStyles from './ChatMessageStyles'
import TimeAgo from 'react-native-timeago';


export default class ChatMessageOutView extends React.Component{
    render(){
        let styles = ChatStyles.styles;
        let dataSource = this.props.currentMessage;
        let messageText = dataSource.text;
        let thumbnail = dataSource.thumbnail;
        let title = dataSource.title;
        let subtitle = dataSource.description;
        let createdAt = dataSource.createdAt;
        let thumnailView;
        let titleView;
        let subtitleView;

        if(thumbnail){
            thumnailView = <Image 
                                style={styles.thumbnailIn}
                                source={{uri: thumbnail}}
                            />
        }

        if(title){
            titleView = <Text style={styles.titleOut}>{title}</Text>
        }

        if(subtitle){
            subtitleView = <Text style={styles.descriptionOut}>{subtitle}</Text> 
        }

        return(
            <View style={styles.containerOut}>
                <View style={styles.messageContainerOut}>
                    <Text style={styles.messageOut}>{messageText}</Text>
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
