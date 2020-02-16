import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserCreation1_2StackNavigator from '../Navigation/UserCreationNavigation1_2';
import Login from '../Components/login/Login';

const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "",
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      header: null
    }
  }
});

const LoginInscriptionStackNavigator = createStackNavigator({
  Login: {
    screen: LoginStack,
    navigationOptions: {
      header: null
    }
  },
  UserCreation1_2StackNavigator: {
    screen: UserCreation1_2StackNavigator,
    navigationOptions: {
      headerTintColor: '#F79862',
      header: null
    }
  }
});

export default createAppContainer(LoginInscriptionStackNavigator);