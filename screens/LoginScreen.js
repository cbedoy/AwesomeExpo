import React from 'react';
import { View, TouchableHighlight, Dimensions, Text, TextInput, StyleSheet } from 'react-native';
import APIController from '../controllers/APIController';
import Global from '../core/Global'
import Colors from '../core/Colors'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#FAFAFA',
      height: 44,
      marginTop: -44,
    },
    headerTintColor: '#333',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);

    this.state = { text: 'carlos' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>AwesomeEXPO</Text>
        <TextInput
          style={styles.input}
          placeholder="Your nickname..."
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          autoCapitalize='none'
        />
        <TouchableHighlight
          style={styles.buttonContainer}
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
    let value = this.state.text;
    if (value.length !== 0) {
      let email = value + '@dagm8.com'
      APIController.signin(email).then((response) => {
        APIController.getUserToken().then((response) => {
          Global.putSession(response);
        });
      });
    }
  }
}

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteColor,
    flex: 1,
    width: screenWidth,
  },
  title: {
    color: '#333',
    fontSize: 30,
    textAlign: 'center',
    width: screenWidth,
    fontWeight: 'bold',
    marginTop: 64,
  },
  buttonContainer: {
    marginTop: 16,
    backgroundColor: Colors.primaryColor,
    width: screenWidth - 32,
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  action: {
    paddingTop: 8,
    paddingBottom: 8,
    textAlign: 'center',
    color: '#FFF',
    fontSize: 28,
  },
  input: {
    marginTop: 48,
    height: 48,
    width: screenWidth - 32,
    color: '#666',
    backgroundColor: Colors.backgroundColor,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 28,
  },
  terms: {
    color: Colors.primaryColorDark,
    fontSize: 12,
    marginTop: 64,
    marginLeft: 16,
    marginRight: 16,
  }
});