import React from 'react';
import { StyleSheet } from 'react-native';
import LoginRegisterToMain from './Navigation/LoginToMain';

export default class App extends React.Component {
  render() {
    return (
      <LoginRegisterToMain />
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