import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import OffreDetails from '../Components/OffreDetails'
import Sauvegardees from '../Components/sauvegardees';

const SauvegardeesStackNavigator = createStackNavigator({
  Sauvegardees: {
    screen: Sauvegardees,
    navigationOptions: {
      title: "Offres Sauvegardées",
      headerStyle: {
        backgroundColor: '#6a51ae',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  },
  OffreDetails: {
    screen: OffreDetails,
    navigationOptions: {
      title: "Détails de l'offre",
      headerTintColor: '#6a51ae',
      tabBarVisible: false
    }
  }
});

SauvegardeesStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "OffreDetails") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible
  };
};

export default createAppContainer(SauvegardeesStackNavigator);