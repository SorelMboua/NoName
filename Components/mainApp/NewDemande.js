import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class NewDemande extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      adresse: "",
      date: '',
      prix: '',
      description: '',
      ButtonLabel: 'Déposer demande',
      titleLablel: 'titre de la demande',
      adresseLabel: 'lieu',
      prixLabel: 'prix',
      descriptionLabel: 'En quoi consiste la demande ?'
    };
  }

  render() {
    return (
      <ScrollView style={styles.main_Container}>
        <StatusBar barStyle="dark-content" />
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

export default NewDemande;