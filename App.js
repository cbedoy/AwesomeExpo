import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {
  StreamApp,
} from 'expo-activity-feed';

import StreamContainer from './containers/StreamContainer'
import LoginContainer from './containers/LoginContainer'
import Global from './core/Global';

export default class App extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      withSession: false,
    }
  }

  render() {
    if(this.state.withSession) {
      let apiKey = "n6dqxby6gcfa";
      let appId = "49021";
      let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibmF0aXZlIn0.9-QkLcUA5g1CdRKqpJXm3BJY8xdowSg0a5-QvRFkFNc";
      return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
          <StreamApp
            apiKey={apiKey}
            appId={appId}
            token={token}>
            <StreamContainer />
          </StreamApp>
        </SafeAreaView>
      );
    }else{
      return(
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
          <LoginContainer />
        </SafeAreaView>
      );
    }
  } 
}