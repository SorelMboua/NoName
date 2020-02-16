import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Reglages from '../Components/mainApp/Reglages'

const ReglagesStackNavigator = createStackNavigator({
  Reglages: {
    screen: Reglages,
    navigationOptions: {
      title: "Réglages",
      headerStyle: {
        backgroundColor: '#6a51ae',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
});

export default createAppContainer(ReglagesStackNavigator)