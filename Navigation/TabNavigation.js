import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import OffresNavigation from '../Navigation/OffresNavigation'
import Reglages from '../Components/Reglages'

const TabNavigator = createBottomTabNavigator({
    Offres: OffresNavigation,
    Reglages: Reglages,
  });

export default createAppContainer(TabNavigator)