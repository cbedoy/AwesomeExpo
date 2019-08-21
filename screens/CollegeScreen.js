import React from 'react';
import { FlatList, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import UserCell from '../components/UserCell'
import UserController from '../controllers/UserController'

export default class CollegeScreen extends React.Component {
  static navigationOptions = {
    title: 'College Directory',
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
  render() {
    let users = UserController.getCollege();
    return (
      <FlatList style={styles.list}
        data={users}
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={({ item, index }) =>
          <TouchableHighlight
            onPress={() => this.handleSelection(item, index)}>
            <UserCell source={item} />
          </TouchableHighlight>
        }
        keyExtractor={item => item.id.toString()}
      />
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
  button: {
      margin:8, 
      flexDirection: 'row-reverse', 
      flex: 1, 
  }
});