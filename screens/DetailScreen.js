import React from 'react';
import { Button, Text, View } from 'react-native';

import { 
  SinglePost,
  LikeButton,
  CommentBox, 
  CommentList,
} from 'expo-activity-feed';

import HeaderView from '../components/HeaderView'
import ContainerView from '../components/ContainerView'
import ContentView from '../components/ContentView'
import DividerView from '../components/DividerView'
import CommentView from '../components/CommentView'
import LoadMoreView from '../components/LoadMoreView'
import ResourceContentView from '../components/ResourceContentView'
import APPBAR_HEIGHT from '../Utils'

const FeedDetailActivity = (props) => {

  let _activityId = props.activity.id;
  let _activity = props.activity;

  let type = props.activity.verb;
  let contentView
  if (type === 'resource'){
    contentView = <ResourceContentView {...props} />
  }else{
    contentView = <ContainerView {...props} />
  }

  return (
    <View>
      <HeaderView {...props}/>
      {contentView}
      <ContentView {...props}/>
      <LikeButton {...props}
        
      />
      <CommentList 
        activityId={_activityId}
        infiniteScroll={true}
        oldestToNewest={true}
        CommentItem={({ comment }) => (
         <CommentView comment={comment}/>
        )}
      />
      <CommentBox 
        activity={_activity}
        onAddReaction={props.onAddReaction}
        styles={{ container: { height: 78 } }}
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
    };
    render() {
      const { navigation } = this.props;
      const _activity = navigation.getParam('activity', undefined);
      const _feedGroup = navigation.getParam('feedGroup', undefined);
      const _userId = navigation.getParam('userId', undefined);

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