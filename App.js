import React from 'react';
import { StyleSheet } from 'react-native';
import InscriptionToMain from './Navigation/InscriptionToMain';

export default class App extends React.Component {
  render() {
    return (
      <InscriptionToMain />
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