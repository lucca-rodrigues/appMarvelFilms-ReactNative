import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/Pages/Home';
import Informacoes from './src/Pages/Informacoes';
import Filmes from './src/Pages/Filmes';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
Informacoes: {
    screen: Informacoes
  },
  Filmes: {
      screen:Filmes
  }
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;