import React from 'react'
import { StyleSheet, StatusBar, Text, Image, View, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

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
        <TouchableOpacity style={styles.new} onPress={() => console.log('')}>
            <Ionicons name="ios-add" size={40} color="#FFF"></Ionicons>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_Container: {
    flex: 12
  },
  demandes: {
    flex: 11
  },
  myButton_container: {
    flexDirection: "row-reverse",
    flex: 1
  },
  myButton: {
    width: 45,
    height: 45,
    backgroundColor: '#6a51ae',
    borderRadius: 22.5,
    borderWidth: 0.5,
    marginRight: 10
  },
  Icon: {
    fontSize: 32,
    color: '#fff',
    fontWeight: "bold",
    textAlign: "center"
  },
  new: {
    position: "absolute",
    marginTop: 530,
    marginStart: 270,
    top: 48,
    left: 48,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F79862",
    alignItems: "center",
    justifyContent: "center"
  },
});

export default Demandes;