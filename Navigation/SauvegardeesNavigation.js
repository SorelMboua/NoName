import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import OffreDetails from '../Components/mainApp/OffreDetails'
import Sauvegardees from '../Components/mainApp/sauvegardees';

var colorToUse = '#F79862';

const SauvegardeesStackNavigator = createStackNavigator({
  Sauvegardees: {
    screen: Sauvegardees,
    navigationOptions: {
      title: "Sauvegardees",
      headerStyle: {
        backgroundColor: colorToUse,
      },
      headerTitleStyle: {
        marginStart: - 170,
        fontSize: 22,
        color: '#fff'
      },
    }
  },
  OffreDetails: {
    screen: OffreDetails,
    navigationOptions: {
      title: "Détails de l'offre",
      header: null,
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

export default createAppContainer(SauvegardeesStackNavigator)