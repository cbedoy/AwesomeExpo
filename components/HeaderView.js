import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class HeaderView extends Component {
    render() {
      let activity = this.props.activity

      return (
        <View style={styles.root}>
          <View style={styles.headerStyle}>
            <Image
              source={{uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}}
              style={styles.leftImage}
            />
            <View style={styles.headerContent}>
              <Text style={styles.textStyle}>{activity.actor}</Text>
              <Text style={styles.noteTextStyle}>{activity.time}</Text>
            </View>
          </View>
        </View>
      );
    }
  }

  
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: "rgb(255,255,255)",
      flexDirection: "row",
      alignItems: "center",
      padding: 16
    },
    headerStyle: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center"
    },
    leftImage: {
      width: 40,
      height: 40,
      backgroundColor: "#CCC",
      borderRadius: 20
    },
    headerContent: {
      justifyContent: "center",
      paddingLeft: 16
    },
    textStyle: {
      color: "#000",
      fontSize: 16,
      lineHeight: 20
    },
    noteTextStyle: {
      color: "#000",
      opacity: 0.5,
      fontSize: 14,
      lineHeight: 16
    }
  });