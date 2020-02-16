import React from 'react';
import { TouchableOpacity, StyleSheet, StatusBar, TextInput, Button, View, Text, Picker, Image, ScrollView, LayoutAnimation } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

var usedColor = '#000000';
var message = 'Remplissez les champs !';

class InscriptionPage1 extends React.Component {
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
      day: '',
      month: '',
      year: '',
      dateDay: 'JJ',
      dateMonth: 'MM',
      dateYear: 'AAAA',
      nameLabel: 'Nom',
      surnameLabel: 'Prénom',
      birthdateLabel: 'Date de naissance',
      nextLabel: 'Suivant',
      SignUpLabel1: 'Déjà inscrit ? ',
      SignUpLabel2: 'Connectez-vous'
    }
  }

  _generateDays = () => {
    let daysData = [];
    for (let i = 1; i < 32; i++) {
      daysData.push(i.toString());
    }
    return daysData;
  }

  _generateMonths = () => {
    let daysData = [];
    for (let i = 1; i < 13; i++) {
      daysData.push(i.toString());
    }
    return daysData;
  }

  _generateYears = () => {
    let daysData = [];
    for (let i = 2020; i > 1959; i--) {
      daysData.push(i.toString());
    }
    return daysData;
  }

  _onPressButton = () => {
    let birthdate = this.state.day + '-' + this.state.month + '-' + this.state.year;
    let user = {
      name: this.state.User.name,
      surname: this.state.User.surname,
      birthdate: birthdate,
      email: '',
      password: '',
      phoneNumber: ''
    }
    this.setState({ User: user }, () => {
      if (this.state.User.name != '' && this.state.User.surname != '') {
        console.log(this.state.User)
        this.props.navigation.navigate("InscriptionPage2", { user: this.state.User });
      } else {
        alert(message);
      }
    });
  }

  _setName = (text) => {
    let user = {
      name: text,
      surname: this.state.User.surname,
      birthdate: '',
      email: '',
      password: '',
      phoneNumber: ''
    }
    this.setState({ User: user });
  }

  _setSurname = (text) => {
    let user = {
      name: this.state.User.name,
      surname: text,
      birthdate: '',
      email: '',
      password: '',
      phoneNumber: ''
    }
    this.setState({ User: user });
  }

  render() {
    LayoutAnimation.easeInEaseOut();
    let dayItems = this._generateDays().map((d, i) => {
      return <Picker.Item key={i} value={d} label={d} />
    });

    let monthItems = this._generateMonths().map((m, i) => {
      return <Picker.Item key={i} value={m} label={m} />
    });

    let yearItems = this._generateYears().map((y, i) => {
      return <Picker.Item key={i} value={y} label={y} />
    });

    return (
      <ScrollView style={styles.main_Container}>
        <StatusBar barStyle="dark-content" />
        <Image source={require('../../assets/Help_me.png')} style={{ height: 320, width: 300, marginTop: 45, marginLeft: 50 }} />
        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.navigate('Login')}>
          <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
        </TouchableOpacity>
        <View style={styles.content_Container}>
          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}>{this.state.nameLabel}</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(name) => this._setName(name)}
                value={this.state.User.name}
              />
            </View>

            <View style={{ marginTop: 32 }}>
              <Text style={styles.inputTitle}>{this.state.surnameLabel}</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(surname) => this._setSurname(surname)}
                value={this.state.User.surname}
              />
            </View>
            <View style={{ marginTop: 32 }}>
              <Text style={styles.inputTitle}>{this.state.birthdateLabel}</Text>
              <View style={styles.birthdate}>
                <View style={styles.dateContainer}>
                  <Picker onValueChange={(data) => { this.setState({ day: data }) }} selectedValue={this.state.day} style={styles.picker} itemStyle={styles.pickerItem}>
                    <Picker.Item label={this.state.dateDay} value='' />
                    {dayItems}
                  </Picker>
                </View>
                <View style={styles.dateContainer}>
                  <Picker onValueChange={(data) => { this.setState({ month: data }) }} selectedValue={this.state.month} style={styles.picker} itemStyle={styles.pickerItem}>
                    <Picker.Item label={this.state.dateMonth} value='' />
                    {monthItems}
                  </Picker>
                </View>
                <View style={styles.dateContainer}>
                  <Picker onValueChange={(data) => { this.setState({ year: data }) }} selectedValue={this.state.year} style={styles.picker} itemStyle={styles.pickerItem}>
                    <Picker.Item label={this.state.dateYear} value='' />
                    {yearItems}
                  </Picker>
                </View>
              </View>
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
    marginTop: 30,
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

export default InscriptionPage1;

//transparent = "rgba(21, 22, 48, 0.1)"