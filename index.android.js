import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

console.disableYellowBox = true;

const whatsapptype = props => (
  <App />
)

AppRegistry.registerComponent('whatsapptype', () => whatsapptype);
