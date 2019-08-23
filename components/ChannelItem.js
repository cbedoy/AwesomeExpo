import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

export default class ChannelItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={this.selectedStyle()}>
                <Image style={styles.avatar} source={{uri: this.props.source.avatar}}/>
                <View >
                    <Text style={styles.title}>{this.props.source.name}</Text>
                    <Text style={styles.description}>{this.props.source.id}</Text>
                </View>
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
}

const styles = StyleSheet.create({
    title: {
        color: '#333',
        fontSize: 22,
        alignContent: 'center',
        paddingTop: 16,
    },
    description : {
        color: '#666',
        fontSize: 14,
        alignContent: 'center',
        paddingBottom: 8,
    },
    avatar: {
        height: 64,
        width: 64,
        backgroundColor: '#E0E0E0',
        margin: 8, 
        borderColor: '#FFF',
        borderRadius: 8,
    },
    buttonContainer: {
      flex: 1,
    }
  });