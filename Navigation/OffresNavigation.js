import { createAppContainer, NavigationEvents } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Offres from '../Components/mainApp/Offres'
import OffreDetails from '../Components/mainApp/OffreDetails'

var colorToUse = '#F79862';

const OffresStackNavigator = createStackNavigator({
  Offres: {
    screen: Offres,
    navigationOptions: {
      title: "Offres",
      headerStyle: {
        backgroundColor: colorToUse,
      },
      headerTitleStyle: {
        marginStart: - 240,
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
      headerStyle: {
        backgroundColor: colorToUse,
      },
      headerTintColor: '#fff',
      tabBarVisible: false,
      headerTitleStyle: {
        fontSize: 20,
        color: '#fff',
      },
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