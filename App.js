import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Offres from './Components/Offres';
import OffresNavigation from './Navigation/OffresNavigation';

export default class App extends React.Component {
  render() {
    return (
      <OffresNavigation />
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