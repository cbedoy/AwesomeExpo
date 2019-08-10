import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { 
    StreamApp,
    FlatFeed,
    Activity,
    LikeButton,
    StatusUpdateForm
 } from 'expo-activity-feed';

 import HeaderView from './components/HeaderView'
 import ContainerView from './components/ContainerView'
 import ContentView from './components/ContentView'

 const CustomActivity = (props) => {
  return (
    <View>
      <HeaderView {...props}/>
      <ContainerView {...props}/>
      <ContentView {...props}/>
    </View>
  );
};

class App extends React.Component {  
  render(){
    let apiKey = "n6dqxby6gcfa";
    let appId = "49021";
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibmF0aXZlIn0.9-QkLcUA5g1CdRKqpJXm3BJY8xdowSg0a5-QvRFkFNc";

    return(
        <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
          <StreamApp
              apiKey={apiKey}
              appId={appId}
              token={token}
          >
            <FlatFeed
              feedGroup="user"
              userId="carlos"
              Activity = {CustomActivity}
            />
          </StreamApp>
        </SafeAreaView>
    );
  }
}


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
