import React from 'react';
import { StatusBar, FlatList, Text, StyleSheet, TouchableOpacity, View, TextInput, SafeAreaView } from 'react-native';
import OffreItem from './OffreItem';
import listeOffres from '../../FakeData/listeOffres';

var bgColor = '#F8F8F8';

class Offres extends React.Component {
  constructor(props) {
    super(props);
  }

  _displayDetailForOffre = (offre) => {
    this.props.navigation.navigate("OffreDetails", { offre: offre })
  }

  render() {
    return (
      <SafeAreaView style={styles.main_Container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.content_Container}>
          <View style={styles.input}>
            <TextInput style={styles.TextInput} placeholder='Mots-clés...' onSubmitEditing={() => alert('Submitted')} onChangeText={(text) => console.log('text is ===>', text)} />
          </View>
          <FlatList
            data={listeOffres}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <OffreItem offre={item} displayDetailForOffre={this._displayDetailForOffre} />}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main_Container: {
    flex: 1,
    backgroundColor: bgColor
  },
  TextInput: {
    marginTop: 5,
    margin: 10,
    height: 40,
    borderColor: '#8A8F9E',
    borderWidth: 0.5,
    paddingLeft: 15,
    borderRadius: 90,
    backgroundColor: 'white'
  },
  input: {
    backgroundColor: '#F79862'
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
    flex: 8,
    marginBottom: 25
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

export default Offres;