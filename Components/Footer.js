import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'react-native-elements';

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      iconSize: 34,
      offres: '#276FBF',
      offresEnregistrees: '#bdc3c7',
      demandes: '#bdc3c7',
      reglages: '#bdc3c7'
    }
    this.searchedText = ""
    this.page = 0
    this.totalPages = 0
  }

  render() {
    return (
      <View style={styles.main_Footer}>
        {/*<Header
          leftComponent={{ icon: 'sort', color: '#fff' }}
          centerComponent={{ text: 'Offres', style: { fontSize: 20, color: '#fff' } }}
          rightComponent={{ icon: 'edit', color: '#fff' }}
          containerStyle={{
            backgroundColor: '#276FBF',
          }}
        />*/}
        <View style={styles.offres}>
          <Icon type="ionicon" name="ios-briefcase" size={this.state.iconSize} color={this.state.demandes} onPress={() => alert('offres')} />
        </View>
        <View style={styles.offresEnregistrees}>
          <Icon type="ionicon" name="ios-bookmark" size={this.state.iconSize} color={this.state.offresEnregistrees} onPress={() => alert('sauvegardées')} />
        </View>
        <View style={styles.demandes}>
          <Icon type="ionicon" name="ios-folder-open" size={this.state.iconSize} color={this.state.demandes} onPress={() => alert('demandes')} />
        </View>
        <View style={styles.parametres}>
          <Icon type="ionicon" name="ios-cog" size={this.state.iconSize} color={this.state.demandes} onPress={() => alert('reglages')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_Footer: {
    flexDirection: 'row',
    height: 70,
    borderTopWidth: 0.25
  },
  offres: {
    flex: 1,
    marginTop: 5,
    alignItems: 'center'
  },
  offresEnregistrees: {
    flex: 1,
    marginTop: 5,
    alignItems: 'center'
  },
  demandes: {
    flex: 1,
    marginTop: 5,
    alignItems: 'center'
  },
  parametres: {
    flex: 1,
    marginTop: 5,
    alignItems: 'center'
  }
})

export default Footer;