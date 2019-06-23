/**
 * Rodkast React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {Image, Icon} from 'react-native-elements';

import styles from './style';

type Props = {};
export class EpisodeCmp extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
            <Image
                 source={{ uri: 'https://rodkast.com/wp-content/uploads/2018/01/rodkast-logo_1.jpg' }}
                 style={{ width: 55, height: 55 }}
            />
            <View style={styles.container}>
                <Text color='#fff'>Title</Text>
                <Text color='#fff'>Description</Text>
                <Text color='#fff'>Date</Text>
            </View>
            <View style={styles.container}>
                <Icon name='favorite' color='#fff'/>
                <Icon name='get_app' color='#fff' type='material'/>
                <Text color='#fff'>00:00</Text>
            </View>
      </View>
    );
  }
}

export class PlaylistView extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <EpisodeCmp/>
        <EpisodeCmp/>
        <EpisodeCmp/>
        <EpisodeCmp/>
        <EpisodeCmp/>
        <EpisodeCmp/>
        <EpisodeCmp/>
        <EpisodeCmp/>
      </View>
    );
  }
}