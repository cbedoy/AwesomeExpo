import React from 'react';
import { Image, View, StyleSheet, Text, Button } from 'react-native';
import FollowController from '../controllers/FollowController'

export default class UserCell extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={this.selectedStyle()}>
                <Image style={styles.avatar} source={{uri: this.props.source.avatar}}/>
                <View style={{flex: 1, flexDirection:'column'}}>
                    <Text style={styles.title}>{this.props.source.nickname}</Text>
                    <Text style={styles.email}>{this.props.source.email}</Text>
                </View>
                <Button  
                    onPress={() => this.handleFollow()}
                    title="Follow"
                />
            </View>
        );
    }

    selectedStyle = () => {
        return {
            flex:1,
            flexDirection: 'row',
            backgroundColor: (this.props.source.selected) ? '#F0F0F0' : '#FFFFFF',
        }
    }

    handleFollow = () => {
        FollowController.follow(this.props.source.id)
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#333',
        fontSize: 18,
        paddingTop: 4,
    },
    email: {
        color: '#666',
        fontSize: 14,
        paddingBottom: 4,
    },
    avatar: {
        height: 32,
        width: 32,
        backgroundColor: '#E0E0E0',
        margin: 8, 
        borderColor: '#FFF',
        borderRadius: 16,
    },
    buttonContainer: {
      flex: 1,
    }
  });