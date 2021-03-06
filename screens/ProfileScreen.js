import React from 'react';
import { StyleSheet, Dimensions, TouchableHighlight, Image, View } from 'react-native';
import ProfileHeaderCell from '../components/ProfileHeaderCell'
import CreditView from '../components/CreditView'
import UsersIcon from '../images/icons/users.png'

export default class ProfileScreen extends React.Component {
  static navigationOptions  = ({ navigation }) => {
    return {
      title: 'Your Profile',
      headerStyle: {
        backgroundColor: '#FAFAFA',
        height: 44,
        marginTop: -44,
      },
      headerTintColor: '#333',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  };
  render() {
    return (
      <View style={{flexDirection: "column", flex:1,}}>
        <ProfileHeaderCell />
        <CreditView />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
  },
  divider : {
      minHeight: 1,
      backgroundColor: '#FAFAFA',
      width: Dimensions.get('window').width,
  },
  list : {
      flex:1, 
      width: Dimensions.get('window').width,
  },
  title: {
      color: '#333',
      fontSize: 20,
      margin: 16,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 8,
    marginLeft: 8,
    resizeMode: 'stretch',
  },
  button: {
      margin:8, 
      flexDirection: 'row-reverse', 
      flex: 1, 
  }
});