import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Reglages from '../Components/mainApp/Reglages'

const ReglagesStackNavigator = createStackNavigator({
  Reglages: {
    screen: Reglages,
    navigationOptions: {
      title: "Réglages"
    }
  }
});

export default createAppContainer(ReglagesStackNavigator)