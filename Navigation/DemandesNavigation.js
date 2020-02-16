import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Demandes from '../Components/mainApp/Demandes';
import OffreDetails from '../Components/mainApp/OffreDetails'

var colorToUse = '#F79862';

const DemandesStackNavigator = createStackNavigator({
  Demandes: {
    screen: Demandes,
    navigationOptions: {
      title: "Demandes",
      headerStyle: {
        backgroundColor: colorToUse,
      },
      headerTitleStyle: {
        marginStart: - 205,
        fontSize: 22,
        color: '#fff'
      },
    }
  },
  OffreDetails: {
    screen: OffreDetails,
    navigationOptions: {
      title: "Détails de l'offre",
      headerTintColor: '#fff',
      tabBarVisible: false,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
      },
    }
  }
});

export default createAppContainer(DemandesStackNavigator)