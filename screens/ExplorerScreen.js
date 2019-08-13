import React from 'react';
import { View, TouchableHighlight, Button } from 'react-native';
import {
  FlatFeed,
  LikeButton,
  StatusUpdateForm,
  ReactionIcon
} from 'expo-activity-feed';

import HeaderView from '../components/HeaderView'
import ContainerView from '../components/ContainerView'
import ContentView from '../components/ContentView'
import DividerView from '../components/DividerView'
import MessageIcon from '../images/icons/message.png'

const FeedActivity = (props) => {
  return (
    <View>
      <HeaderView {...props} />
      <ContainerView {...props} />
      <ContentView {...props} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <LikeButton reactionKind="heart" {...props} />

        <ReactionIcon
          icon={MessageIcon}
          labelSingle="comment"
          labelPlural="comments"
          counts={props.activity.reaction_counts}
          kind="comment"
        />
      </View>
      <DividerView />
    </View>
  );
}

export default class ExplorerScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Explorer',
      headerStyle: {
      backgroundColor: '#FAFAFA',
    },
    headerTintColor: '#333',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Notifications"
        color="#333"
        backgroundColor="#FAFAFA"
      />
    ),
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <FlatFeed
        feedGroup="user"
        userId="carlos"
        Activity={(props) =>
          <TouchableHighlight onPress={() => this.onClick({ ...props })}>
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