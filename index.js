/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import EStyleSheet from 'react-native-extended-stylesheet';

AppRegistry.registerComponent(appName, () => App);

// app entry: set global variables and calc styles
EStyleSheet.build({
  $textColor: '#0275d8',
  $rodkastBlue: '#1f2041',
  $headerBlue: '#44c0ff',
  $outline: 1,
});