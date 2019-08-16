import React from 'react';
import { View, TouchableHighlight, Button, Text, TextInput, StyleSheet } from 'react-native';
import Controller from '../controllers/APIController'
import APIController from '../controllers/APIController';
import Global from '../core/Global'

export default class LoginScreen extends React.Component {
    static navigationOptions = {
      title: 'Login',
      headerStyle: {
        backgroundColor: '#FAFAFA',
      },
      headerTintColor: '#333',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };

    constructor(props){
      super(props);

      this.state = { text: '' };
    }

    render() {
      return (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Your nickname..."
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button 
            style={styles.action}
            onPress={() => this.login()}
            title="Log In"
            color="#841584"
          />
        </View>
      );
    }

    login = () => {
      let nickname = this.state.text;
      console.log(nickname)
      if (nickname.length !== 0){
        APIController.getUserToken(nickname).then((response) => {
          Global.putSession(response);
        });
      }
    }
}

const styles = StyleSheet.create({
  input: {
    height: 40, 
    borderColor: '#f0f0f0', 
    borderWidth: 1, 
    marginTop: 64,
    marginLeft: 16,
    marginRight: 16, 
    fontSize: 16,
  },
  action: {
    marginTop: 64,
    marginLeft: 16,
    marginRight: 16, 
  }
});