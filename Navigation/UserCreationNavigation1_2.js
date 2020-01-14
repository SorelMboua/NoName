import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import InscriptionPage1 from '../Components/signUp/InscriptionPage1';

const UserCreation1_2StackNavigator = createStackNavigator({
  InscriptionPage1: {
    screen: InscriptionPage1,
    navigationOptions: {
      title: "Informations personnelles"
    },
    headerStyle: {
      backgroundColor: '#6a51ae',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
});

export default createAppContainer(UserCreation1_2StackNavigator)