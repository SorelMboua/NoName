import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Demandes from '../Components/Demandes';

const DemandesStackNavigator = createStackNavigator({
  Demandes: {
    screen: Demandes,
    navigationOptions: {
      title: "Demandes"
    }
  }
});

export default createAppContainer(DemandesStackNavigator)