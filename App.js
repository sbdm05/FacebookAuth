

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TabNavigator} from 'react-navigation';
import store from './store';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';
import {Provider} from 'react-redux';


export default class App extends React.Component {



render() {
        // Create our first Navigator
    const MainNavigator = TabNavigator({
      welcome: {screen: WelcomeScreen},
      auth: {screen: AuthScreen}
    });

        return (
          <Provider store={store}>
              <AuthScreen />
          </Provider>
        );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



