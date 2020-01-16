import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import InscriptionPage1 from '../Components/signUp/InscriptionPage1';
import InscriptionPage2 from '../Components/signUp/InscriptionPage2';

const UserCreation1_2StackNavigator = createStackNavigator({
  InscriptionPage1: {
    screen: InscriptionPage1,
    navigationOptions: {
      title: "Inscription 1/2"
    },
    headerStyle: {
      backgroundColor: '#6a51ae',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  InscriptionPage2: {
    screen: InscriptionPage2,
    navigationOptions: {
      title: "Inscription 2/2",
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