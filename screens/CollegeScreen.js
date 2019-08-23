import React from 'react';
import { FlatList, TouchableHighlight, StyleSheet, Dimensions, TextInput, View } from 'react-native';
import UserCell from '../components/UserCell'
import UserController from '../controllers/UserController'
import FollowController from '../controllers/FollowController';
import FollowCollegeProvider from '../providers/FollowCollegeProvider'

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

  constructor(props){
    super(props);

    let dataSource = FollowCollegeProvider.getCollegeWithFollow();

    this.state = {
      text: '',
      dataSource: dataSource,
    }
  }


  render() {
    return (
      <View style={{flexDirection: "column", flex:1,}}>
        <TextInput
          style={styles.input}
          placeholder="Search users..."
          onChangeText={(text) => this.handleSearch(text)}
          value={this.state.text}
          autoCapitalize='none'
        />
        <FlatList style={styles.list}
          data={this.state.dataSource}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item, index }) =>
            <TouchableHighlight onPress={() => this.handleSelection(item, index)}>
              <UserCell source={item} />
            </TouchableHighlight>
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }

  handleSearch(text){
    this.setState({ text })

    let users = [];

    if(text.length >= 3){
      users = UserController.query(text);
    }else{
      users = UserController.getCollege();
    }

    this.setState({
      dataSource: users,
    })
  }

  componentDidMount() {
    FollowController.followers()
  }
}

let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  divider: {
    minHeight: 1,
    backgroundColor: '#FAFAFA',
    width: width,
  },
  list: {
    width: width,
  },
  title: {
    color: '#333',
    fontSize: 20,
    margin: 16,
  },
  button: {
    margin: 8,
    flexDirection: 'row-reverse',
    flex: 1,
  },
  input: {
    height: 48,
    width: width - 16,
    color: '#666',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
    margin: 8,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 18,
  },
});