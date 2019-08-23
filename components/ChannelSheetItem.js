import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

export default class ChannelSheetItem extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={this.selectedStyle()}>
                <Image style={styles.avatar} source={{uri: this.props.source.avatar}}/>
                <Text style={styles.title}>{this.props.source.name}</Text>
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
        color: '#000',
        fontSize: 18,
        paddingTop: 8,
        paddingBottom: 8,
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