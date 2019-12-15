import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

var usedColor = '#000000';
var leftColor = '#123259';

class OffreItem extends React.Component {
  render() {
    const { offre } = this.props;
    return (
      <View style={styles.main_container}>
        <View style={styles.color}></View>
        <View style={styles.image_container}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 60 / 2, marginTop: 24 }}
            source={{ uri: offre.image }}
          />
        </View>
        <View style={styles.content_container}>
          <View style={styles.title_container}>
            <Text style={styles.title_text} numberOfLines={2}>{offre.title}</Text>
          </View>
          <View style={styles.adresse_container}>
            <Text style={styles.adresse_text} numberOfLines={1}>{offre.adress}</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text} numberOfLines={1}>{offre.date}</Text>
          </View>
        </View>
        <View style={styles.prix_container}>
          <Text style={styles.prix_text}>{offre.prix}</Text>
          <Text style={styles.prix_devise}>XAF</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 120,
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    borderColor: usedColor,
    borderWidth: 0.5,
  },
  color: {
    flex: 0.1,
    backgroundColor: leftColor
  },
  image_container: {
    flex: 1
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    margin: 5,
    backgroundColor: 'white',
    paddingLeft: 5
  },
  content_container: {
    flex: 3,
    flexDirection: 'column'
  },
  title_container: {
    flex: 2,
    flexDirection: 'column-reverse',
    paddingTop: 5
  },
  title_text: {
    fontWeight: 'bold',
    color: usedColor,
    fontSize: 20
  },
  adresse_container: {
    flex: 1
  },
  adresse_text: {
    textAlign: 'left',
    color: usedColor,
    fontSize: 14
  },
  date_container: {
    flex: 1,
    paddingBottom: 5
  },
  date_text: {
    textAlign: 'left',
    color: usedColor,
    fontSize: 14
  },
  prix_container: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 5
  },
  prix_text: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: 24,
    color: usedColor,
    textAlign: 'center',
    paddingTop: 40
  },
  prix_devise: {
    flex: 2,
    fontWeight: 'bold',
    color: usedColor,
    fontSize: 11,
    textAlign: 'right',
    paddingBottom: 18
  }
});

export default OffreItem;