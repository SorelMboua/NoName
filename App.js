import React from 'react';
import { StyleSheet } from 'react-native';
import TabNavigation from './Navigation/TabNavigation';
import UserCreationNavigation1_2 from './Navigation/UserCreationNavigation1_2';

export default class App extends React.Component {
  render() {
    return (
      <UserCreationNavigation1_2 />
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