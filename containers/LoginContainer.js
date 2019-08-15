import LoginScreen from '../screens/LoginScreen'

import {createStackNavigator, createAppContainer} from 'react-navigation';

const LoginNavigator = createStackNavigator(
    {
      Login: { 
        screen: LoginScreen 
      },
    },{
      initialRouteName: 'Login'
    }
);

const LoginContainer = createAppContainer(LoginNavigator);

export default LoginContainer