import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Offres from './Components/Offres';

export default class App extends React.Component {
  render() {
    return (
      <Offres />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});