import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Reglages from '../Components/Reglages'

const ReglagesStackNavigator = createStackNavigator({
  Reglages: {
    screen: Reglages,
    navigationOptions: {
      title: "Reglages"
    }
  }
});

export default createAppContainer(ReglagesStackNavigator)