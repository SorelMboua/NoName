import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Offres from '../Components/mainApp/Offres'
import OffreDetails from '../Components/mainApp/OffreDetails'

const OffresStackNavigator = createStackNavigator({
  Offres: {
    screen: Offres,
    navigationOptions: {
      title: "Offres",
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

OffresStackNavigator.navigationOptions = ({ navigation }) => {
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

export default createAppContainer(OffresStackNavigator)