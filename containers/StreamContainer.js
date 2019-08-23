import DetailScreen from '../screens/DetailScreen'
import ExplorerScreen from '../screens/ExplorerScreen'
import NotificationsScreen from '../screens/NotificationsScreen'
import ContentProviderScreen from '../screens/ContentProviderScreen'
import CollegeScreen from '../screens/CollegeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ChannelsScreen from '../screens/ChannelsScreen'
import ChatScreen from '../screens/ChatScreen'

import {createStackNavigator, createAppContainer} from 'react-navigation';

const StreamNavigator = createStackNavigator(
  {
    Explorer: { 
      screen: ExplorerScreen 
    },
    Chat: { 
      screen: ChatScreen 
    },
    College: { 
      screen: CollegeScreen 
    },
    Notifications: { 
      screen: NotificationsScreen 
    },
    Detail: { 
      screen: DetailScreen 
    },
    Profile: { 
      screen: ProfileScreen 
    },
    Content: { 
      screen: ContentProviderScreen 
    },
    Channels: { 
      screen: ChannelsScreen 
    },
  },{
    initialRouteName: 'Explorer'
  });

const StreamContainer = createAppContainer(StreamNavigator);

export default StreamContainer