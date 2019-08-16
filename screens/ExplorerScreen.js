import React from 'react';
import { View, TouchableHighlight, Button, StyleSheet } from 'react-native';
import {
  FlatFeed,
  LikeButton,
  ReactionIcon,
} from 'expo-activity-feed';

import HeaderView from '../components/HeaderView'
import ContainerView from '../components/ContainerView'
import ContentView from '../components/ContentView'
import DividerView from '../components/DividerView'
import ResourceContentView from '../components/ResourceContentView'
import ToolbarOptions from '../components/ToolbarOptions'
import MessageIcon from '../images/icons/message.png'
import Global from '../core/Global'


const FeedActivity = (props) => {

  let type = props.activity.verb;
  let contentView
  if (type === 'resource'){
    contentView = <ResourceContentView {...props} />
  }else{
    contentView = <ContainerView {...props} />
  }

  return (
    <View>
      <HeaderView {...props} />
      {contentView}
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
      <ToolbarOptions navigation={navigation}/>
    ),
    }
  };
  render() {
    return (
      <FlatFeed
        feedGroup="user"
        userId="carlos"
        Activity={(props) =>
          <TouchableHighlight onPress={() => this.onClick({ ...props })}>
            <FeedActivity {...props} />
          </TouchableHighlight>
        }
        navigation={this.props.navigation}
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
