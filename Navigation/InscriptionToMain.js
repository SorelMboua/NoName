import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserCreation1_2StackNavigator from '../Navigation/UserCreationNavigation1_2';
import TabNavigation from '../Navigation/TabNavigation';

const InscriptionToMainStackNavigator = createStackNavigator({
  UserCreation1_2StackNavigator: {
    screen: UserCreation1_2StackNavigator,
    
  },
  TabNavigation: {
    screen: TabNavigation
  }
}, {
  headerMode: 'none',
})

export default createAppContainer(InscriptionToMainStackNavigator)