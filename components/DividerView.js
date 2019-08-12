import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class DividerView extends React.Component{
    render() {
      return (
        <View style={styles.divider}/>
      );
    }
}

const styles = StyleSheet.create({
    divider: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      marginLeft: 16,
      justifyContent: 'center',
      minHeight: 1,
    },
  });