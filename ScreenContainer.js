import DetailScreen from './screens/DetailScreen'
import ExplorerScreen from './screens/ExplorerScreen'
import NotificationsScreen from './screens/NotificationsScreen'

import {createStackNavigator, createAppContainer} from 'react-navigation';

const Navigator = createStackNavigator(
  {
    Explorer: { 
      screen: ExplorerScreen 
    },
    Notifications: { 
      screen: NotificationsScreen 
    },
    Detail: { 
      screen: DetailScreen 
    },
  },{
    initialRouteName: 'Explorer'
  });

const Container = createAppContainer(Navigator);

export default Container