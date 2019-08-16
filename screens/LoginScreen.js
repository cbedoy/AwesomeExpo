import React from 'react';
import { View, TouchableHighlight, Button, Text, TextInput, StyleSheet } from 'react-native';
import Controller from '../controllers/APIController'
import APIController from '../controllers/APIController';
import Global from '../core/Global'
import Colors from '../core/Colors'

export default class LoginScreen extends React.Component {
    static navigationOptions = {
      title: 'Login',
      headerStyle: {
        backgroundColor: Colors.primaryColorDark,
        height: 44, 
      },
      headerTintColor: Colors.whiteColor,
      borderBottomColor: Colors.primaryColorDark,
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
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Your nickname..."
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            autoCapitalize = 'none'
          />
          <TouchableHighlight 
            style={{alignItems: 'center', flex: 1, flexDirection: 'row'}}
            onPress={() => this.login()}>
            <Text style={styles.action}>Get Started</Text>
          </TouchableHighlight>

          <Text style={styles.terms}>
            By sigin in you agree to comply with Terms and contions
            </Text>
        </View>
      );
    }

    login = () => {
      let nickname = this.state.text;
      if (nickname.length !== 0){
        APIController.getUserToken(nickname).then((response) => {
          Global.setUser(nickname);
          Global.putSession(response);
        });
      }
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteColor,
    flex: 1,
  },
  input: {
    height: 40, 
    borderColor: '#f0f0f0', 
    borderWidth: 1, 
    marginTop: 64,
    marginLeft: 16,
    marginRight: 16, 
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 28,
  },
  action: {
    borderColor: '#f0f0f0', 
    flex: 1,
    backgroundColor: Colors.primaryColor,
    borderWidth: 1, 
    borderRadius: 8,
    padding: 8,
    color: Colors.whiteColor,
    fontSize: 28,
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16, 
  },
  terms : {
    color:"#841584",
    fontSize: 16,
    alignItems: 'center',
    marginTop: 64,
    marginLeft: 16,
    marginRight: 16, 
  }
});