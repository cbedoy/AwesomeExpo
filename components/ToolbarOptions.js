import React from 'react';
import { View, TouchableHighlight, Button, StyleSheet, Image } from 'react-native';
import ActivityController from '../controllers/ActivityController'

import AddIcon from '../images/icons/add.png'
import ChannelsIcon from '../images/icons/channels.png'
import SettingsIcon from '../images/icons/settings.png'

export default class ToolbarOptions extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let navigation = this.props.navigation;
        return(
            <View style={styles.root}>
                <TouchableHighlight activeOpacity={0.5} onPress={() => this.handleAdd()} >
                    <Image style={styles.iconStyle}
                        source={AddIcon}
                    />
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.5} onPress={() => navigation.navigate('Channels')} >
                    <Image style={styles.iconStyle}
                        source={ChannelsIcon}
                    />
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.5} onPress={() => navigation.navigate('Profile')}>
                    <Image style={styles.iconStyle}
                        source={SettingsIcon}
                    />
                </TouchableHighlight>
            </View>
        );
    }

    handleAdd = () => {
        ActivityController.createRandomActivity('user')
    }
}


const styles = StyleSheet.create({
    root: {
      flex: 1,
      flexDirection: 'row'
    },
    iconStyle: {
        height: 25,
        width: 25,
        marginRight: 8,
        marginLeft: 8,
        resizeMode: 'stretch',
    },
  });