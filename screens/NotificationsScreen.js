import React from 'react';
import { View, TouchableHighlight, Button, Text } from 'react-native';
import {
    NotificationFeed
  } from 'expo-activity-feed';

import NotificationsView from '../components/NotificationsView'
  
export default class NotificationsScreen extends React.Component {
    static navigationOptions = {
      title: 'Notifications',
      headerStyle: {
        backgroundColor: '#FAFAFA',
        height: 44, 
        marginTop: -44,
      },
      headerTintColor: '#333',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    render() {
      return (
        <View>
          <Text>Notifications!</Text>
        </View>
      );
    }
  


    onClick = (data) => {
      const { navigate } = this.props.navigation;
      const _activity = data.activity;
      const _feedGroup = data.feedGroup;
      const _userId = data.userId;
  
      
    }
  }