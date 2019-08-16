import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MessageIcon from '../images/icons/message.png'
import LikeIcon from '../images/icons/like.png'
import DisLikeIcon from '../images/icons/dislike.png'
import {
    LikeButton,
    ReactionIcon,
  } from 'expo-activity-feed';

export default class ReactionsView extends React.Component{
    render(){
        let activity = this.props.activity;
        
        return(
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <ReactionIcon
                    icon={LikeIcon}
                    counts={activity.reaction_counts}
                    onPress={()=> this.props.onToggleReaction}
                    kind="like"
                    />
                <ReactionIcon
                    icon={DisLikeIcon}
                    counts={activity.reaction_counts}
                    onPress={()=> this.props.onToggleReaction}
                    kind="dislike"
                    />
                <ReactionIcon
                    icon={MessageIcon}
                    counts={activity.reaction_counts}
                    kind="comment"
                    />
            </View>
        );
    }
}