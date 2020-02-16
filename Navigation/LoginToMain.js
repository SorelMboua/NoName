import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginInscriptionNavigation from './LoginInscriptionNavigation';
import TabNavigation from './TabNavigation';

const LoginToMainStackNavigator = createStackNavigator({
  Login: {
    screen: LoginInscriptionNavigation,
  },
  TabNavigation: {
    screen: TabNavigation,
  }
}, {
  headerMode: 'none',
});

export default createAppContainer(LoginToMainStackNavigator);