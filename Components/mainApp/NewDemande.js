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
}