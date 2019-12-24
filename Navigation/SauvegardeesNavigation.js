import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import OffreDetails from '../Components/OffreDetails'
import Sauvegardees from '../Components/sauvegardees';

const SauvegardeesStackNavigator = createStackNavigator({
  Sauvegardees: {
    screen: Sauvegardees,
    navigationOptions: {
      title: "Offres Sauvegardées"
    }
  },
  OffreDetails: {
    screen: OffreDetails
  }
});

export default createAppContainer(SauvegardeesStackNavigator)