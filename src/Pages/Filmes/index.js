import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import api from '../.././services/api';
import ListaFilmes from '../../Components/ListaFilmes';

class Filmes extends Component {
  constructor(props){
    super(props);
    this.state ={
      filmes: [],
      loading: true
    };
  }

  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data,
      loading: false
    });
  }
  render() {
    if (this.state.loading){
      return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
          <ActivityIndicator color="#09A6FF" size={80}/>
        </View>
      )
    }
    else{
      return(
        <View>
          <FlatList 
            data={this.state.filmes}
            keyExtractor={item => item.id.toString()}
            renderItem={ ({item}) => <ListaFilmes data={item}/>}
          />
        </View>
      )
    }
  }
}

export default Filmes;
