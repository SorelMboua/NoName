import React from 'react'
import { StyleSheet, ScrollView, Text, Image, View, Button, StatusBar } from 'react-native';

var usedColor = '#000000';

class OffreDetails extends React.Component {

  _onPressButton = () => {
    alert('Services proposés')
  }

  _getOffre = (offre) => {
    return offre;
  }

  render() {
    const { navigation } = this.props;
    let offre = navigation.getParam('offre');
    let button = 'Proposer mes services';
    this._getOffre(offre);
    return (
      <ScrollView style={styles.main_Container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header_container}>
          <View style={styles.left_container}>
            <View style={styles.left_date}>
              <Text style={styles.left_date} numberOfLines={1}>{offre.date}</Text>
            </View>
            <View style={styles.left_adress}>
              <Text style={styles.left_adress} numberOfLines={1}>{offre.adress}</Text>
            </View>
            <View style={styles.left_complement}>
              <Text style={styles.left_complement} numberOfLines={2}>{offre.complement}</Text>
            </View>
          </View>
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              source={{ uri: offre.image }}
            />
          </View>
          <View style={styles.right_container}>
            <Text style={styles.right_text}>{offre.prix}</Text>
            <Text style={styles.right_devise}>XAF</Text>
          </View>
        </View>
        <View style={styles.title_container}>
          <Text style={styles.title_text}>{offre.title}</Text>
        </View>
        <View style={styles.content_container}>
          <Text style={styles.content_text}>{offre.description}</Text>
          <Button
            onPress={this._onPressButton}
            title={button}
            color='#6a51ae'
          />
          {/*color={offre.color}*/}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main_Container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10
  },
  header_container: {
    flex: 1,
    flexDirection: 'row',
  },
  image_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    borderWidth: 0.5,
  },
  left_container: {
    flex: 1,
  },
  left_date: {
    flex: 1,
    fontSize: 15,
    paddingLeft: 5,
    paddingTop: 5
  },
  left_adress: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 5,
    paddingTop: 0
  },
  left_complement: {
    flex: 1,
    fontSize: 15,
    paddingLeft: 5
  },
  right_container: {
    flex: 1,
    flexDirection: 'column',
  },
  right_text: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: 28,
    color: usedColor,
    textAlign: 'right',
    paddingTop: 40,
    paddingRight: 20
  },
  right_devise: {
    flex: 2,
    fontWeight: 'bold',
    color: usedColor,
    fontSize: 14,
    textAlign: 'right',
    paddingBottom: 18,
    paddingRight: 20
  },
  title_container: {
    flex: 0.75,
  },
  title_text: {
    fontWeight: 'bold',
    color: usedColor,
    textAlign: 'center',
    padding: 25,
    fontSize: 30
  },
  content_container: {
    flex: 4,
  },
  content_text: {
    color: usedColor,
    fontSize: 18,
    padding: 20,
    paddingTop: 5
  }
});

export default OffreDetails;