import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class ContainerView extends Component {
    render() {
      let activity = this.props.activity
      let view;
      if(activity.content != undefined){
          view = <Image source={{uri: activity.content}} style={styles.cardItemImagePlace} />
      }
      return (
        <View style={styles.root}>
          {view}
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: "white",
      flexDirection: "column"
    },
    cardItemImagePlace: {
      flex: 1,
      aspectRatio: 2, 
      resizeMode: 'stretch',
    }
  });
  