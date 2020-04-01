import React, { Component } from 'react';
import {View, Text, Button, Image, StyleSheet } from 'react-native';


class Informacoes extends Component{
  static navigationOptions = ({ navigation}) => {

  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.informacao}>
          Acompanhe as Novidades Marvel em primeira mão.
        </Text>
        <View>
          <Image style={styles.listagem}source={require('../../Img/listagem.jpg')} />
        </View>
        <Button 
        title="Ver lista de filmes"
        onPress={() => this.props.navigation.navigate('Filmes')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  informacao: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20

  },
  listagem: {
    width: null,
    height: 150,
    marginTop: 30,
    marginBottom: 30
  }
});

export default Informacoes;