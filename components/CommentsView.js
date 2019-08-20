import React from 'react';
import { Button, Text, View } from 'react-native';

import { 
    CommentBox, 
    CommentList,
  } from 'expo-activity-feed';

import DividerView from '../components/DividerView'
import CommentView from '../components/CommentView'

export default class CommentsView extends React.Component{
    render(){
        let activity = this.props.activity;
        let activityId = this.props.activity.id;
        return(
            <View>
                <CommentList 
                    activityId={activityId}
                    infiniteScroll={true}
                    oldestToNewest={true}
                    CommentItem={({ comment }) => (
                        <CommentView comment={comment}/>
                    )}
                />
                <CommentBox 
                    activity={activity}
                    onAddReaction={this.props.onAddReaction}
                    styles={{ container: { height: 128 } }}
                />
                <DividerView />
            </View>
        );
    }
}