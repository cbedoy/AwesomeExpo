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
          <TouchableHighlight onPress={() => this.onClick({...props})}>
            <FeedActivity {...props} />
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
    
    navigate('Detail', {
      activity: _activity,
      feedGroup: _feedGroup,
      userId: _userId
    })
  }
}