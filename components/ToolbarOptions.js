import React from 'react';
import { View, TouchableHighlight, Button, StyleSheet, Image } from 'react-native';
import ActivityController from '../controllers/ActivityController'

import AlertIcon from '../images/icons/alert.png'
import AddIcon from '../images/icons/add.png'
import Global from '../core/Global'

export default class ToolbarOptions extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let navigation = this.props.navigation;
        return(
            <View style={styles.root}>
                <TouchableHighlight activeOpacity={0.5} onPress={() => navigation.navigate('Notifications')}>
                    <Image style={styles.iconStyle}
                        source={AlertIcon}
                    />
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.5} onPress={() => this.handleAdd()} >
                    <Image style={styles.iconStyle}
                        source={AddIcon}
                    />
                </TouchableHighlight>
            </View>
        );
    }

    handleAdd = () => {
        console.log('handleAdd')

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