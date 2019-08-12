import React from 'react';
import { Button, Text, View } from 'react-native';

import { 
  SinglePost,
  LikeButton,
  CommentBox, 
} from 'expo-activity-feed';

import HeaderView from '../components/HeaderView'
import ContainerView from '../components/ContainerView'
import ContentView from '../components/ContentView'
import DividerView from '../components/DividerView'
import APPBAR_HEIGHT from '../Utils'

const FeedDetailActivity = (props) => {
  return (
    <View>
      <HeaderView {...props}/>
      <ContainerView {...props}/>
      <ContentView {...props}/>
      <LikeButton {...props}
        
      />
      <CommentBox {...props}
        onSumbit={
          console.log("Summited")
        }
        onReactionAdded={
          console.log("Added")
        }
        verticalOffset={-200}
      />
      <DividerView />
    </View>
  );
}

export default class DetailScreen extends React.Component {
    static navigationOptions = {
      title: 'Detail',
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#333',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {height: APPBAR_HEIGHT}
    };
    render() {
      const { navigation } = this.props;
      const _activity = navigation.getParam('activity', undefined);
      const _feedGroup = navigation.getParam('feedGroup', undefined);
      const _userId = navigation.getParam('userId', undefined);
      let containerView;

      console.log(_activity)

      /*
      if(_activity != undefined && _feedGroup != undefined && _userId != undefined){
        containerView = <SinglePost 
          activity={_activity}
          feedGroup={_feedGroup}
          userId={_userId}
          Activity={FeedDetailActivity}
        />
      }else{
        containerView = <Text>ERROR</Text>
      }
      */

      return (
        <SinglePost 
          activity={_activity}
          feedGroup={_feedGroup}
          userId={_userId}
          Activity={FeedDetailActivity}
        />
      );
    }
  }