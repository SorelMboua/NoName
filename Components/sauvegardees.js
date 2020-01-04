import React from 'react';
import { ActivityIndicator, FlatList, Text, ScrollView, StyleSheet, View, TextInput } from 'react-native';
import OffreItem from './OffreItem';
import listeOffres from '../FakeData/listeOffres';

var usedColor = '#000000';

class Sauvegardees extends React.Component {
  constructor(props) {
    super(props);
  }

  _displayDetailForOffre = (offre) => {
    this.props.navigation.navigate("OffreDetails", { offre: offre })
  }

  _filterData = (listeOffres) => {
    var favData = [];
    listeOffres.forEach(element => {
      if (element.fav === true) {
        favData.push(element);
      }
    });
    return favData;
  }

  render() {
    return (
      <View style={styles.main_Container}>
        <TextInput style={styles.TextInput} placeholder='Mots-clés...' onSubmitEditing={() => alert('Submitted')} onChangeText={(text) => console.log('text is ===>', text)} />
        <View style={styles.content_Container}>
          <FlatList
            data={this._filterData(listeOffres)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <OffreItem offre={item} displayDetailForOffre={this._displayDetailForOffre} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_Container: {
    flex: 1
  },
  TextInput: {
    marginTop: 15,
    margin: 10,
    height: 50,
    borderColor: usedColor,
    borderWidth: 0.5,
    paddingLeft: 5
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
    marginBottom: 15
  }
});

export default Sauvegardees;