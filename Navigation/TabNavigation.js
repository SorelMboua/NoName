import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import OffresNavigation from '../Navigation/OffresNavigation'
import ReglagesNavigation from './ReglagesNavigation';
import SauvegardeesNavigation from './SauvegardeesNavigation';
import DemandesNavigation from './DemandesNavigation';

const TabNavigator = createBottomTabNavigator(
  {
    Offres: OffresNavigation,
    Sauvegardées: SauvegardeesNavigation,
    Demandes: DemandesNavigation,
    Réglages: ReglagesNavigation
  }
);

export default createAppContainer(TabNavigator)