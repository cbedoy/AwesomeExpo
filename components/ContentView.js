import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class ContentView extends Component {
    render() {
      let tweet = this.props.activity.tweet; 
      return (
        <View style={styles.root}>
          <Text style={styles.bodyText}>
            {tweet}
          </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: "rgb(255,255,255)",
      padding: 16
    },
    bodyText: {
      color: "#424242",
      fontSize: 14,
      lineHeight: 20
    }
  });