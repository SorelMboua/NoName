import React from 'react'
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';

class Sauvegardees extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.main_Container}>
        <Text>Sauvegardees Bitch!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_Container: {
    flex: 1
  }
});

export default Sauvegardees;