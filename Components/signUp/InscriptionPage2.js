import React from 'react';
import { Image, StyleSheet, StatusBar, TextInput, TouchableOpacity, View, Text, ScrollView, LayoutAnimation } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Firebase from '../../api/Firebase';

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
      emailLabel: 'Email',
      passwordLabel: 'Mot de passe',
      phoneNumberLabel: 'Téléphone',
      nextLabel: 'Créer un compte',
      SignUpLabel1: 'Déjà inscrit ? ',
      SignUpLabel2: 'Connectez-vous'
    }
  }

  _setPhoneNumber = (text) => {
    user.phoneNumber = text;
    this.setState({ User: user });
  }

  _setEmail = (text) => {
    user.email = text;
    this.setState({ User: user });
  }

  _setPassword = (text) => {
    user.password = text;
    this.setState({ User: user });
  }

  _onPressButton = () => {
    if (user.email != '' && user.phoneNumber != '' && user.password != '') {
      this.setState({ User: user });
      console.log(this.state.User);
      Firebase.shared.signUp(user)
        .then(this.props.navigation.navigate("TabNavigation", { user: user }))
    } else {
      alert(message);
    }
  }

  render() {
    LayoutAnimation.easeInEaseOut();
    const { navigation } = this.props;
    user = navigation.getParam('user');
    return (
      <ScrollView style={styles.main_Container}>
        <StatusBar barStyle="dark-content" />
        <Image source={require('../../assets/Help_me.png')} style={{ height: 320, width: 300, marginTop: 35, marginLeft: 50 }} />
        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate('InscriptionPage1')}>
          <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
        </TouchableOpacity>
        <View style={styles.content_Container}>
          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}>{this.state.phoneNumberLabel}</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => this._setPhoneNumber(text)}
                value={this.state.User.phoneNumber}
              />
            </View>

            <View style={{ marginTop: 32 }}>
              <Text style={styles.inputTitle}>{this.state.emailLabel}</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(text) => this._setEmail(text)}
                value={this.state.User.email}
              />
            </View>

            <View style={{ marginTop: 32 }}>
              <Text style={styles.inputTitle}>{this.state.passwordLabel}</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                onChangeText={(text) => this._setPassword(text)}
                value={this.state.User.password}
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
              <Text style={{ color: "#FFF", fontWeight: "500" }}>{this.state.nextLabel}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignSelf: "center", marginTop: 20 }}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={{ color: "#414959", fontSize: 13 }}>
                {this.state.SignUpLabel1} <Text style={{ fontWeight: "500", color: "#F79862" }}>{this.state.SignUpLabel2}</Text>
              </Text>
            </TouchableOpacity>
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
  form: {
    marginTop: 10,
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"
  },
  picker: {
    height: 45,
    width: '70%',
    color: "#8A8F9E",
  },
  pickerItem: {
    height: 45,
    color: "#161F3D"
  },
  button: {
    marginHorizontal: 30,
    marginTop: 40,
    backgroundColor: "#F79862",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
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
    flex: 12,
    marginTop: 15
  },
  back: {
    position: "absolute",
    top: 48,
    left: 32,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F79862",
    alignItems: "center",
    justifyContent: "center"
  },
  birthdate: {
    flex: 3,
    marginTop: 8,
    flexDirection: 'row',
  },
  dateContainer: {
    flex: 1,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
  }
});

export default InscriptionPage2;