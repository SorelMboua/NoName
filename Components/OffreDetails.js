import React from 'react'
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';

class OffreDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      offre: undefined
    }
  }

  _displayDetailForOffre = () => {
    return (
      <ScrollView style={styles.main_Container}>
        <Text>Here i am in the offer OffreDetails</Text>
      </ScrollView>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    let data = this.props.navigation.state.params.offre;
    this.setState({
      offre: data
    })
  }

  render() {
    return (
      <View style={styles.main_Container}>
        {this._displayDetailForOffre()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_Container: {
    flex: 1
  }
});

export default OffreDetails;