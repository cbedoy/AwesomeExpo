import React from 'react';
import { Button } from 'react-native';

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
      const {navigate} = this.props.navigation;
      return (
        <SinglePost 
          activity={FeedDetailActivity}
        />
      );
    }
  }