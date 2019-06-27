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
  renderRow(){
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', height: 70 }}>
                <View style={styles.icon}>
                    <Image
                    source={{ uri: 'https://rodkast.com/wp-content/uploads/2018/01/rodkast-logo_1.jpg' }}
                    style={{ width: 55, height: 55 }}
                    />
                </View>
                <View style={styles.episodeBody}>
                    <Text style={{ color: '#fff'}}>Title</Text>
                    <Text style={{ color: '#fff'}}>Description</Text>
                    <Text style={{ color: '#fff'}}>Date</Text>
                    <Progress.Bar progress={0.3} width={260} />
                </View>
                <View style={styles.endComponent}>
                    <Icon name='favorite-border' color='#fff'/>
                    <Icon name='get-app' color='#fff' type='material'/>
                    <Text style={{ color: '#fff'}}>00:00</Text>
                </View>
            </View>
        );
    }
  render() {
      const data = [1];
      return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
                data.map((datum) => { // This will render a row for each data element.
                    return this.renderRow();
                })
            }
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
           <EpisodeCmp/>
           <EpisodeCmp/>
           <EpisodeCmp/>
           <EpisodeCmp/>
      </View>
    );
  }
}