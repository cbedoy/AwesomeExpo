import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import {
  FlatFeed,
  LikeButton,
  CommentBox,
} from 'expo-activity-feed';

import HeaderView from '../components/HeaderView'
import ContainerView from '../components/ContainerView'
import ContentView from '../components/ContentView'
import DividerView from '../components/DividerView'
import APPBAR_HEIGHT from '../Utils'

const FeedActivity = (props) => {
  return (
    <View>
        <HeaderView {...props} />
        <ContainerView {...props} />
        <ContentView {...props} />
        <LikeButton {...props}

        />
        <DividerView />
      </View>
  );
}

export default class ExplorerScreen extends React.Component {
  static navigationOptions = {
    title: 'Explorer',
    headerStyle: {
      backgroundColor: '#FFFFFF',
    },
    headerTintColor: '#333',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerStyle: { height: APPBAR_HEIGHT }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <FlatFeed
        feedGroup="user"
        userId="carlos"
        Activity={(props) =>
          <TouchableHighlight onPress={this.onClick()}>
            <FeedActivity {...props} />
          </TouchableHighlight>
        }
        notify
      />
    );
  }

  onClick = () => {
    const { navigate } = this.props.navigation;

    console.log("onClick")
/*
    const activity = navigation.getParam('activity');
      const feedGroup = navigation.getParam('feedGroup');
      const userId = navigation.getParam('userId');
    
    navigate('Detail', {
      activity: "",
      feedGroup: "",
      userId: ""
    })

    */
  }
}