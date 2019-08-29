import React from 'react';
import { Image, View, StyleSheet, Text, ImageBackground } from 'react-native';
import TimeAgo from 'react-native-timeago'
import Colors from '../core/Colors'

export default class ChannelItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let abbreviationView;
        let metadata = this.props.source.metadata;
        let channel = this.props.source;
        if(metadata && !channel.avatar){
            abbreviationView = <Text style={styles.abbreviation}>{this.abbreviationFromName(channel)}</Text>
        }
        return(
            <View style={this.selectedStyle()}>
                <ImageBackground 
                    style={this.avatarStyle(channel)} 
                    imageStyle={{borderRadius: 8}}
                    source={{uri: channel.avatar}}>
                    {abbreviationView}
                </ImageBackground>
                <View style={{flex:1, marginRight: 8}}>
                    <Text style={styles.date}><TimeAgo>{new Date()}</TimeAgo></Text>
                    <Text style={styles.title} numberOfLines={1}>{channel.name}</Text>
                    <Text style={styles.description} numberOfLines={1}>No messages</Text>
                </View>
            </View>
        );
    }

    abbreviationFromName = (channel) => {
        if(channel.metadata && channel.metadata.abbreviation)
            return channel.metadata.abbreviation;
        else
            return channel.name.substring(0, 4).toUpperCase()
    }

    selectedStyle = () => {
        return {
            flex:1,
            flexDirection: 'row',
            backgroundColor: (this.props.source.selected) ? '#FFFFFF' : '#FFFFFF',
        }
    }

    avatarStyle = (channel) => {
        let targetColor = '#FFF'
    
        if(!channel.avatar){
            let colors = Colors.channelColors;
            let name = channel.name;
            let number = name.charCodeAt(0) + name.charCodeAt(name.length - 1)
            targetColor = colors[number % colors.length];
        }

        return {
            height: 64,
            width: 64,
            backgroundColor: targetColor,
            margin: 8, 
            borderColor: '#FFF',
            borderRadius: 8,
        }
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#333',
        fontSize: 18,
        alignContent: 'center',
    },
    abbreviation: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        textAlign: 'center',
        height: 24,
        width: 64,
    },
    date : {
        color: '#999',
        fontSize: 12,
        paddingTop: 8,
        textAlign: 'right',
    },
    description : {
        color: '#666',
        fontSize: 15,
        alignContent: 'center',
        paddingBottom: 8,
    },
    buttonContainer: {
      flex: 1,
    }
  });