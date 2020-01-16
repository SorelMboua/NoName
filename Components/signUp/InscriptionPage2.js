import React from 'react';
import { ScrollView, StyleSheet, StatusBar, TextInput, Button, View, Text } from 'react-native';

var usedColor = '#000000';
var message = 'Remplissez les champs !';
var user = {
  name: '',
  surname: '',
  birthdate: '',
  email: '',
  password: '',
  phoneNumber: '',
};

class InscriptionPage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      User: {
        name: '',
        surname: '',
        birthdate: '',
        email: '',
        password: '',
        phoneNumber: '',
      },
      emailLabel: 'exemple@test.com',
      passwordLabel: 'Mot de passe',
      phoneNumberLabel: 'Tel 000000000',
      nextLabel: 'Créer un compte'
    }
  }

  _onPressButton = () => {
    if (user.email != '' && user.phoneNumber != '' && user.password != '') {
      this.setState({ User: user }, () => {
        console.log(this.state.User);
        this.props.navigation.navigate("TabNavigation", { user: this.state.User });
      });
    } else {
      alert(message);
    }
  }

  render() {
    const { navigation } = this.props;
    user = navigation.getParam('user');
    return (
      <ScrollView style={styles.main_Container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.content_Container}>
          <View style={styles.uniqueBoutton}>
            <TextInput placeholder={this.state.phoneNumberLabel} style={styles.TextInput1} onSubmitEditing={() => { }} onChangeText={(text) => user.phoneNumber = text} />
          </View>
          <View style={styles.uniqueBoutton}>
            <TextInput placeholder={this.state.emailLabel} style={styles.TextInput2} onSubmitEditing={() => { }} onChangeText={(text) => user.email = text} />
          </View>
          <View style={styles.uniqueBoutton}>
            <TextInput secureTextEntry autoCorrect={false} placeholder={this.state.passwordLabel} style={styles.TextInput2} onSubmitEditing={() => { }} onChangeText={(text) => user.password = text} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.nextBoutton}>
            {/* Nothing here */}
          </View>
          <View style={styles.nextBouttonContainer}>
            <Button
              onPress={this._onPressButton}
              title={this.state.nextLabel}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main_Container: {
    flex: 1,
    marginTop: 5,
  },
  Label: {
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 16,
    color: usedColor
  },
  TextInput1: {
    margin: 15,
    marginTop: 0,
    height: 50,
    borderColor: usedColor,
    borderBottomWidth: 1,
    borderWidth: 0,
    paddingLeft: 5,
  },
  TextInput2: {
    margin: 15,
    marginTop: 0,
    height: 50,
    borderColor: usedColor,
    borderBottomWidth: 1,
    borderWidth: 0,
    paddingLeft: 5,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content_Container: {
    flex: 10,
    marginTop: 15
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30
  },
  uniqueBoutton: {
    flex: 1,
  },
  nextBouttonContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
  }
});

export default InscriptionPage2;