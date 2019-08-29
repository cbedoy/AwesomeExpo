import React, { Component } from "react";
import { StyleSheet, View, Text, Linking } from "react-native";
import Utils from '../Utils'

export default class ContentView extends Component {
    render() {
      let object = this.props.activity.object; 
      return (
        <View style={styles.root}>
          <Text style={styles.bodyText} onPress={() => this.openUrl(object)}>
            {object}
          </Text>
        </View>
      );
    }

    openUrl = (object) => {
      let elements = Utils.extractURL(object);
      if(elements){
        let url = elements[0];
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          } else {
            console.log('Don\'t know how to open URI: ' + url);
          }
        });
      }
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