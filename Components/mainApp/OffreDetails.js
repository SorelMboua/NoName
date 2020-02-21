import React from 'react'
import { StyleSheet, ScrollView, Text, Image, View, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

var usedColor = '#000000';
var colorToUse = '#F79862';
var colorToUse2 = '#FF4500';

class OffreDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtonLabel: 'Proposer mes services',
    };
  }

  _onPressButton = () => {
    alert('Services proposés')
  }

  _getOffre = (offre) => {
    return offre;
  }

  render() {
    const { navigation } = this.props;
    let offre = navigation.getParam('offre');
    this._getOffre(offre);
    return (
      <ScrollView style={{ marginTop:20 }}>
        <StatusBar barStyle="dark-content" />
        <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
        </TouchableOpacity>
        <View style={styles.main_Container}>
          <View style={styles.header_container}>
            <View style={styles.left_container}>
              <View style={styles.left_date}>
                <Text style={styles.left_date} numberOfLines={1}>{offre.date}</Text>
              </View>
              <View style={styles.left_address}>
                <Text style={styles.left_address} numberOfLines={1}>{offre.address}</Text>
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
            <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
              <Text style={{ color: "#FFF", fontWeight: "500", fontSize: 18 }}>{this.state.ButtonLabel}</Text>
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
    flexDirection: 'column',
    marginTop: 90,
    marginHorizontal: 10,
  },
  back: {
    position: "absolute",
    marginTop: 0,
    top: 48,
    left: 32,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F79862",
    alignItems: "center",
    justifyContent: "center"
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
    fontSize: 18,
    paddingLeft: 5,
    paddingTop: 5
  },
  left_address: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 5,
    paddingTop: 0
  },
  left_complement: {
    flex: 1,
    fontSize: 16,
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
    color: colorToUse,
    textAlign: 'right',
    paddingTop: 40,
    paddingRight: 20
  },
  right_devise: {
    flex: 2,
    fontWeight: 'bold',
    color: colorToUse,
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
    fontSize: 26
  },
  content_container: {
    flex: 4,
  },
  content_text: {
    color: usedColor,
    textAlign: "justify",
    fontSize: 19,
    lineHeight: 26,
    padding: 20,
    paddingTop: 5
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: colorToUse2,
    borderRadius: 4,
    marginTop: 25,
    marginBottom: 30,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default OffreDetails;