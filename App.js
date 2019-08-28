import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {
  StreamApp,
} from 'expo-activity-feed';

import StreamContainer from './containers/StreamContainer'
import LoginContainer from './containers/LoginContainer'
import Global from './core/Global';
import ProfileHeaderCell from './components/ProfileHeaderCell'

import ChatMessageInView from './chatcomponents/ChatMessageInView'
import ChatMessageOutView from './chatcomponents/ChatMessageOutView'
import ChatMessageEventView from './chatcomponents/ChatMessageEventView'

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      streamId: '',
      streamKey: '',
      userToken: '',
    }

    Global.subscribe(this)
  }

  
  render() {
    if(this.state.session) {
      let apiKey = this.state.streamKey
      let appId = this.state.streamId;
      let token = this.state.userToken;

    
      Global.unsubscribe(this)
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