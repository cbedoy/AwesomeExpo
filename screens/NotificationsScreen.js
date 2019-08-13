import React from 'react';
import { View, TouchableHighlight, Button } from 'react-native';
import {
    NotificationFeed,
    Activity,
  } from 'expo-activity-feed';

export default class NotificationsScreen extends React.Component {
    static navigationOptions = {
      title: 'Notifications',
      headerStyle: {
        backgroundColor: '#FAFAFA',
      },
      headerTintColor: '#333',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    render() {
      return (
        <NotificationFeed
          userId="carlos"
          Group={
            <TouchableHighlight onPress={() => this.onClick({ ...props })}>
              <Activity {...props} />
            </TouchableHighlight>
          }
          notify
          />
      );
    }
  
    onClick = (data) => {
      const { navigate } = this.props.navigation;
      const _activity = data.activity;
      const _feedGroup = data.feedGroup;
      const _userId = data.userId;
  
      
    }
  }