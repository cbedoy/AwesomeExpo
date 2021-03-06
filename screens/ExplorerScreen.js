import React from 'react';
import { View, TouchableHighlight} from 'react-native';
import {
  FlatFeed,
} from 'expo-activity-feed';

import ExplorerHeaderView from '../components/ExplorerHeaderView'
import ContainerView from '../components/ContainerView'
import ContentView from '../components/ContentView'
import DividerView from '../components/DividerView'
import LinkContentView from '../components/LinkContentView'
import ToolbarOptions from '../components/ToolbarOptions'
import ReactionsView from '../components/ReactionsView'
import UserController from '../controllers/UserController'


const FeedActivity = (props) => {

  let type = props.activity.verb;
  let contentView
  if (type === 'resource'){
    contentView = <LinkContentView {...props} />
  }else{
    contentView = <ContainerView {...props} />
  }

  return (
    <View>
      <ExplorerHeaderView {...props} />
      <ContentView {...props}/>
      {contentView}
      <ReactionsView {...props} />
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
        height: 44, 
        marginTop: -44,
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
        userId={UserController.getUser().id}
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
