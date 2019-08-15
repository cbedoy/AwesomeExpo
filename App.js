import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {
  StreamApp,
} from 'expo-activity-feed';

import Container from './ScreenContainer'

export default class App extends React.Component {
  render() {
    let apiKey = "n6dqxby6gcfa";
    let appId = "49021";
    let token = "";
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
        <StreamApp
          apiKey={apiKey}
          appId={appId}
          token={token}>
          <Container />
        </StreamApp>
      </SafeAreaView>
    );
  } 
}