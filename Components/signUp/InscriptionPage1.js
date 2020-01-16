import React from 'react';
import { ScrollView, StyleSheet, StatusBar, TextInput, Button, View, Text, Picker } from 'react-native';

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
      dateDay: 'Jour',
      dateMonth: 'Mois',
      dateYear: 'Année',
      nameLabel: 'Nom',
      surnameLabel: 'Prénom',
      nextLabel: 'Suivant'
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
    if (this.state.year != '' && this.state.month != '' && this.state.day != '') {
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
    } else {
      alert(message);
    }
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
        <View style={styles.content_Container}>
          <View style={styles.buttonContainer}>
            <View style={styles.uniqueBoutton}>
              <TextInput placeholder={this.state.nameLabel} style={styles.TextInput1} onSubmitEditing={() => { }} onChangeText={(text) => this._setName(text)} />
            </View>
            <View style={styles.uniqueBoutton}>
              <TextInput placeholder={this.state.surnameLabel} style={styles.TextInput2} onSubmitEditing={() => { }} onChangeText={(text) => this._setSurname(text)} />
            </View>
          </View>
        </View>
        <View style={styles.birthdate}>
          <View style={styles.dateContainer}>
            <Picker onValueChange={(data) => { this.setState({ day: data }) }} selectedValue={this.state.day}>
              <Picker.Item label={this.state.dateDay} value='' />
              {dayItems}
            </Picker>
          </View>
          <View style={styles.dateContainer}>
            <Picker onValueChange={(data) => { this.setState({ month: data }) }} selectedValue={this.state.month}>
              <Picker.Item label={this.state.dateMonth} value='' />
              {monthItems}
            </Picker>
          </View>
          <View style={styles.dateContainer}>
            <Picker onValueChange={(data) => { this.setState({ year: data }) }} selectedValue={this.state.year}>
              <Picker.Item label={this.state.dateYear} value='' />
              {yearItems}
            </Picker>
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
  TextInput1: {
    marginRight: 5,
    height: 50,
    borderColor: usedColor,
    borderBottomWidth: 1,
    borderWidth: 0,
    paddingLeft: 5,
  },
  TextInput2: {
    marginLeft: 5,
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
    flex: 12,
    marginTop: 15
  },
  birthdate: {
    flex: 3,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
  },
  dateContainer: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5
  },
  uniqueBoutton: {
    flex: 1,
  },
  nextBouttonContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
  }
});

export default InscriptionPage1;