import React from 'react';
import Autolink from 'react-native-autolink';
import Colors from '../core/Colors'
import { View, Text, StyleSheet } from 'react-native';

export default class CreditCell extends React.Component{
    render(){
        return(
            <View style={{margin: 16,}}>
                <Autolink
                    linkStyle = {styles.credit}
                    text="
                    Made with 🏋🎸🖥 @Aguascalientes, Mexico (https://github.com/cbedoy)
                    #iambedoy #codeandmusic
                    "
                    hashtag="instagram" />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    credit: {
        color: Colors.accentColor,
        marginTop: 64,
        marginLeft: 16,
        marginRight: 16,
    }
})