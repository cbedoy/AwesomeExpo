import DetailScreen from '../screens/DetailScreen'
import ExplorerScreen from '../screens/ExplorerScreen'
import NotificationsScreen from '../screens/NotificationsScreen'
import ContentProviderScreen from '../screens/ContentProviderScreen'

import {createStackNavigator, createAppContainer} from 'react-navigation';

const StreamNavigator = createStackNavigator(
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
    Content: { 
      screen: ContentProviderScreen 
    },
  },{
    initialRouteName: 'Explorer'
  });



const StreamContainer = createAppContainer(StreamNavigator);


export default StreamContainer