import React from 'react';
import { View, TouchableHighlight, Button, Text } from 'react-native';
import Controller from '../controllers/EmbedlyController'

export default class ContentProviderScreen extends React.Component {
    static navigationOptions = {
      title: 'Content Provider',
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

        this.state = {
            metadata: {},
            url: "",
            status : false
        };
    }

    componentDidMount(){
        let data = Controller.getMetadataFromLink('https://web.whatsapp.com/').then(response => {
            this.setState({
                metadata: response,
                url: response.url,
                status: true,
                count: count
            })
        })
    }

    render() {  
        if (this.state.status){
            return (
                <View>
                  <Text>Content Provider! {this.state.url} Json size {this.state.count}</Text>
                </View>
              );
        }else{
            return (
                <View>
                  <Text>Loading!</Text>
                </View>
              );
        }
      
    }
  }