import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, StatusBar, View, Image, LayoutAnimation, ScrollView } from 'react-native';
import * as firebase from 'firebase';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      greeting: 'Bonjour,\n Ravi de vous revoir.',
      emailLabel: 'email',
      passwordLabel: 'Mot de passe',
      ButtonLabel: 'Se connecter',
      SignUpLabel1: 'Pas encore inscrit ? ',
      SignUpLabel2: 'Rejoignez-nous'
    };
  }

  _setEmail = (text) => {
    this.setState({ email: text });
  }

  _setPassword = (text) => {
    this.setState({ password: text });
  }

  _moveToMain = (auth, error) => {
    if(auth === true){
      this.props.navigation.navigate("TabNavigation");
    } else {
      alert(error)
    }
  }

  _onPressButton = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => this._moveToMain(false, error))
      .then(this._moveToMain(true, null))
  }

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <ScrollView style={styles.main_Container}>
        <StatusBar barStyle="dark-content" />
        <Image source={require('../../assets/Help_me.png')} style={{ height: 320, width: 300, marginTop: 60, marginLeft: 50 }} />
        <Text style={styles.greeting} >{this.state.greeting}</Text>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>{this.state.emailLabel}</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email}
            />
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={styles.inputTitle}>{this.state.passwordLabel}</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password: password })}
              value={this.state.password}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
          <Text style={{ color: "#FFF", fontWeight: "500" }}>{this.state.ButtonLabel}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32, marginBottom: 25 }}
          onPress={() => this.props.navigation.navigate("UserCreation1_2StackNavigator")}
        >
          <Text style={{ color: "#414959", fontSize: 13 }}>
            {this.state.SignUpLabel1} <Text style={{ fontWeight: "500", color: "#F79862" }}>{this.state.SignUpLabel2}</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main_Container: {
    flex: 1
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: 'center'
  },
  form: {
    marginTop: 20,
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
  button: {
    marginHorizontal: 30,
    backgroundColor: "#F79862",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Login;