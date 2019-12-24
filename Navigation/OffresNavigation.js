import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Offres from '../Components/Offres'
import OffreDetails from '../Components/OffreDetails'
import { Icon } from 'react-native-elements';

const OffresStackNavigator = createStackNavigator({
  Offres: {
    screen: Offres,
    navigationOptions: {
      title: "Offres"
    }
  },
  OffreDetails: {
    screen: OffreDetails
  }
});

export default createAppContainer(OffresStackNavigator)