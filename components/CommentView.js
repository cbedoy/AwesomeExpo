import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Dimensions } from "react-native";
import TimeAgo from 'react-native-timeago';
import Utils from '../Utils'

export default class CommentView extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let comment = this.props.comment;
        let userId = comment.user_id;
        let message = comment.data.text;
        let date = comment.updated_at;

        return(
            <View style={styles.root}>
                <Image style={styles.leftImage} 
                    source={{uri: Utils.avatarFromNickname(userId)}}
                />
                <View style={styles.messageContent}>
                    <Text style={styles.nicknameStyle}>{userId}</Text>
                    <Text style={styles.messageTextStyle}>{message}</Text>
                    <Text style={styles.dateStyle}><TimeAgo time={date}/></Text>
                    <View style={styles.divider} />
                </View>
            </View>
        );
    }
}

var width = Dimensions.get('window').width; //full width

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: "#FFF",
      flexDirection: "row",
      alignItems: "center",
      alignSelf: 'stretch',
      padding: 16
    },
    leftImage: {
      width: 40,
      height: 40,
      backgroundColor: "#CCC",
      borderRadius: 20
    },
    messageContent: {
      justifyContent: "center",
      alignSelf: 'stretch',
      width: width - 56,
      paddingLeft: 16,
      paddingRight: 16,
    },
    nicknameStyle: {
      color: "#000",
      fontSize: 16,
      lineHeight: 20
    },
    messageTextStyle: {
      color: "#000",
      opacity: 0.5,
      fontSize: 15,
      lineHeight: 16,
      paddingTop: 4,
    },
    dateStyle: {
        color: "#000",
        opacity: 0.4,
        fontSize: 10,
        lineHeight: 20,
        textAlign: 'right',
        paddingTop: 4,
        paddingLeft: 16,
        paddingBottom: 4,
    },
    divider: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        minHeight: 1,
    },
  });