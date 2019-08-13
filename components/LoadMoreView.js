import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


export default class LoadMoreView extends React.Component{
    render(){
        let { children, refreshing, onPress } = this.props;

        return(
            <TouchableOpacity
                style={styles.root}
                onPress={onPress}
                disabled={refreshing} >
                <Text style={styles.buttonText}>{children}</Text>
            </TouchableOpacity>
        );
    }
}

 
const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: "rgb(255,255,255)",
      flexDirection: "row",
      alignItems: "center",
      padding: 16
    },
    buttonText: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        color: "#333333",
        fontSize: 200,
        lineHeight: 20
      },
});

