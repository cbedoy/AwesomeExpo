import React from 'react';
import { Button } from 'react-native';

export default class DetailScreen extends React.Component {
    static navigationOptions = {
      title: 'Detail',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Explorer', {name: 'Jane'})}
        />
      );
    }
  }