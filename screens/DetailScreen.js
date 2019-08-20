import React from 'react';
import { View } from 'react-native';

import { 
  SinglePost,
} from 'expo-activity-feed';

import ExplorerHeaderView from '../components/ExplorerHeaderView'
import ContainerView from '../components/ContainerView'
import ContentView from '../components/ContentView'
import LinkContentView from '../components/LinkContentView'
import ReactionsView from '../components/ReactionsView'
import CommentsView from '../components/CommentsView'

const FeedDetailActivity = (props) => {
  let type = props.activity.verb;
  let contentView
  if (type === 'resource'){
    contentView = <LinkContentView {...props} />
  }else{
    contentView = <ContainerView {...props} />
  }

  return (
    <View>
      <ExplorerHeaderView {...props}/>
      <ContentView {...props}/>
      {contentView}
      <ReactionsView {...props} />
      <CommentsView {...props}/>
    </View>
  );
}

export default class DetailScreen extends React.Component {
    static navigationOptions = {
      title: 'Detail',
      headerStyle: {
        backgroundColor: '#FFFFFF',
        height: 44, 
        marginTop: -44,
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