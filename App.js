
import  React , {Component} from 'react';

// import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';

// import StackNavigator from './components/stackNavigator';
import GameScreen from './screens/Game';
import EvScreen from './screens/ev';
import TrexScreen from './screens/trex'
import PacmanScreen from './screens/pacman'
import SnakeScreen from './screens/snake'

import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

// const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppContainer/>
    </NavigationContainer>
  );
}

var AppNavigator = createSwitchNavigator({
  Game : GameScreen,
  Trex : TrexScreen,
  Pacman : PacmanScreen,
  Snake : SnakeScreen,
  Ev : EvScreen,  

})

const AppContainer = createAppContainer(AppNavigator)
