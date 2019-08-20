import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class ContentView extends Component {
    render() {
      let object = this.props.activity.object; 
      return (
        <View style={styles.root}>
          <Text style={styles.bodyText}>
            {object}
          </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: "rgb(255,255,255)",
      paddingRight: 16,
      paddingLeft: 16,
      paddingBottom: 8,
    },
    bodyText: {
      color: "#424242",
      fontSize: 16,
      lineHeight: 16
    }
  });