import React from 'react'
import {View, Image, Text} from 'react-native'
import ChatStyles from './ChatMessageStyles'

export default class ChatMessageEventView extends React.Component{
    render(){
        let styles = ChatStyles.styles;
        return(
            <View style={styles.eventContainer}>
                    <Text style={styles.eventMessage}>There's a message that contains more than one line here</Text>
                
            </View>
        );
    }
}