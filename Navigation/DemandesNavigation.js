import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Demandes from '../Components/Demandes';

const DemandesStackNavigator = createStackNavigator({
  Demandes: {
    screen: Demandes,
    navigationOptions: {
      title: "Demandes"
    },
    headerStyle: {
      backgroundColor: '#6a51ae',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

export default createAppContainer(DemandesStackNavigator)