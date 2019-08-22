import DetailScreen from '../screens/DetailScreen'
import ExplorerScreen from '../screens/ExplorerScreen'
import NotificationsScreen from '../screens/NotificationsScreen'
import ContentProviderScreen from '../screens/ContentProviderScreen'
import CollegeScreen from '../screens/CollegeScreen'
import ProfileScreen from '../screens/ProfileScreen'

import {createStackNavigator, createAppContainer} from 'react-navigation';

const StreamNavigator = createStackNavigator(
  {
    Explorer: { 
      screen: ExplorerScreen 
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
  },{
    initialRouteName: 'Explorer'
  });

const StreamContainer = createAppContainer(StreamNavigator);

export default StreamContainer