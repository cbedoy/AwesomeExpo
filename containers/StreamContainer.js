import DetailScreen from '../screens/DetailScreen'
import ExplorerScreen from '../screens/ExplorerScreen'
import CollegeScreen from '../screens/CollegeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ChannelsScreen from '../screens/ChannelsScreen'
import ChatScreen from '../screens/ChatScreen'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'; 
import Colors from '../core/Colors'

import {createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';

const ProfileStack = createStackNavigator({
  Profile: { 
    screen: ProfileScreen 
  },
})

const CollegeStack = createStackNavigator({
  College: { 
    screen: CollegeScreen 
  }, 
  },{
    initialRouteName: 'College'
});

const ExplorerStack = createStackNavigator({
  Explorer: { 
    screen: ExplorerScreen 
  },
  Detail: { 
    screen: DetailScreen 
  },
  },{
    initialRouteName: 'Explorer'
});

const ChannelsStack = createStackNavigator({
  Chat: { 
    screen: ChatScreen 
  },
  Channels: { 
    screen: ChannelsScreen 
  },
  },{
    initialRouteName: 'Channels'
});

const StreamNavigator = createBottomTabNavigator({
  Channels: ChannelsStack,
  Explorer: ExplorerStack,
  College: CollegeStack,
  Profile: ProfileStack
}, {
  initialRouteName: 'Channels',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if(routeName === 'Channels')
        iconName = 'ios-chatbubbles' 
      else if(routeName === 'Explorer')
        iconName = 'ios-planet'
      else if(routeName === 'College')
        iconName = 'ios-contacts'
      else 
        iconName = 'ios-cog'

      let color = focused?Colors.accentColor: '#f0f0f0'

      return <Ionicons name={iconName} size={32} color={color} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: Colors.accentColor,
    inactiveTintColor: 'gray',
  },
})

const StreamContainer = createAppContainer(StreamNavigator);

export default StreamContainer