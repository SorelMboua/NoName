import React from 'react'
import { StyleSheet, StatusBar, Text, Image, View, Button } from 'react-native';

class Demandes extends React.Component {
  constructor(props) {
    super(props)
  }

  _onPressButton = () => {
    alert('Nouvelle demande');
  }

  render() {
    return (
      <View style={styles.main_Container}>
        <StatusBar barStyle="light-content" />
        <Text>Demandes Bitch!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_Container: {
    flex: 1
  },
  myButton_container: {
    marginBottom: 105,
    marginRight: 5
  },
  myButton: {
    padding: 5,
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: 'rgb(195, 125, 198)',

  }
});

export default Demandes;