import React from 'react';
import { View, TouchableHighlight, Dimensions, FlatList, TextInput, StyleSheet } from 'react-native';
import ChannelItem from '../components/ChannelItem'
import ChannelsController from '../controllers/ChannelsController'
import ChatController from '../controllers/ChatController'

export default class ChannelsScreen extends React.Component {
  static navigationOptions = {
    title: 'Channels',
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

    this.state = {
        text: '',
        channels: [],
        selectedChannels: [],
        showAction: false,
    }
  }

  componentDidMount() {
      ChannelsController.prepareChannels().then((channels) => {
        let channelsId = [];

        channels.forEach(element => {
          channelsId.push(element.id)
        });

        ChatController.lastMessages(channelsId).then((messages) => {
          Object.keys(messages).forEach((key) => {
            let targetChannel = channels.find(it => it.id === key);
            if(targetChannel){
              targetChannel.lastMessage = messages[key]
            }
          })
          
          this.setState({
            channels: channels,
            dataSource: channels,
          })
        })
      })
  }
  
  render() {
    return (
      <View style={{flexDirection: "column", flex:1,}}>
        <TextInput
          style={styles.input}
          placeholder="Search channels..."
          onChangeText={(text) => this.handleSearch(text)}
          value={this.state.text}
          autoCapitalize='none'
        />
        <FlatList style={styles.list}
          data={this.state.channels}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item, index }) =>
            <TouchableHighlight onPress={() => this.handleSelection(item, index)}>
              <ChannelItem source={item} />
            </TouchableHighlight>
          }
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }  

  handleSelection(item, index){
    let navigation = this.props.navigation;

    navigation.navigate('Chat', {
      selectedChannel: item
    })
  }

  handleSearch(text){
    this.setState({ text })

    if(text.length > 3){
      let channels = this.state.dataSource;
      let query = []

      channels.forEach(element => {
        let description = element.name.toLowerCase();
        if(description.includes(text)){
          query.push(element);
        }
      });

      this.setState({
        channels: query,
      })
    }else{
      this.setState({
        channels: this.state.dataSource,
      })
    }
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