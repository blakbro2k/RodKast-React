/**
 * Rodkast React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * https://hackernoon.com/building-a-music-streaming-app-using-react-native-6d0878a13ba4
 */

import React, {Component} from 'react';
import {Modal, Platform, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {Image, Icon} from 'react-native-elements';

import styles from './style';

const Header = ({ message, onDownPress, onQueuePress, onMessagePress }) => (
  <View style={styles.container}>
    <Text>Episode Title</Text>
  </View>
);

type Props = {};
export default class PlayerView extends Component<Props> {
  render() {
      return (
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', height: 70 }}>
                <Header/>
            </View>
      );
  }
}