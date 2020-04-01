import React, { Component } from 'react';
import {View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';

class Home extends Component{
  static navigationOptions = {
    header: null
  }
  render(){
    return(
      <View styles={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Informacoes')}>
          <Image style={styles.logo} resizeMode='cover' source={require('../../Img/logo.jpg')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  logo: {
   width: 360, height: 600
  }
})
export default Home;