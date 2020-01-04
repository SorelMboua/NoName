import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import OffresNavigation from '../Navigation/OffresNavigation';
import ReglagesNavigation from './ReglagesNavigation';
import SauvegardeesNavigation from './SauvegardeesNavigation';
import DemandesNavigation from './DemandesNavigation';
import { Icon } from 'react-native-elements';

var colorToUse = '#6a51ae'

OffresNavigation.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

SauvegardeesNavigation.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const TabNavigator = createBottomTabNavigator(
  {
    Offres: {
      screen: OffresNavigation,
      navigationOptions: {
        tabBarLabel: 'Offres',
        tabBarOptions: {
          activeTintColor: colorToUse
        },
        tabBarIcon: ({ tintColor }) => (
          <Icon type="ionicon" name="ios-briefcase" color={tintColor} size={25} />
        )
      }
    },
    Sauvegardees: {
      screen: SauvegardeesNavigation,
      navigationOptions: {
        tabBarLabel: 'Sauvegardées',
        tabBarOptions: {
          activeTintColor: colorToUse
        },
        tabBarIcon: ({ tintColor }) => (
          <Icon type="ionicon" name="ios-bookmark" color={tintColor} size={25} />
        )
      }
    },
    Demandes: {
      screen: DemandesNavigation,
      navigationOptions: {
        tabBarLabel: 'Demandes',
        tabBarOptions: {
          activeTintColor: colorToUse
        },
        tabBarIcon: ({ tintColor }) => (
          <Icon type="ionicon" name="ios-folder-open" color={tintColor} size={25} />
        )
      }
    },
    Reglages: {
      screen: ReglagesNavigation,
      navigationOptions: {
        tabBarLabel: 'Réglages',
        tabBarOptions: {
          activeTintColor: colorToUse
        },
        tabBarIcon: ({ tintColor }) => (
          <Icon type="ionicon" name="ios-cog" color={tintColor} size={25} />
        )
      }
    }
  }
);

export default createAppContainer(TabNavigator)