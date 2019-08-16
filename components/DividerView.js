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
      backgroundColor: '#F0F0F0',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 32,
    },
  });