import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";


export default class NotificationView extends React.Component{
    constructor(props){
        super(props);

        console.log("NotificationView")
        console.log(props.data);
    }

    render(){
        return(
            <View>
                <Text>Notification</Text>
            </View>
        );
    }
}