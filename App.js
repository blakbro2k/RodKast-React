/**
 * Rodkast React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {Button, ThemeProvider, Icon, Image} from 'react-native-elements';

import HeaderView from './header'
import {EpisodeCmp, PlaylistView} from './content'
import styles from './style';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ContainerView style={styles.bottomButtons}/>
        <FooterView/>
      </View>
    );
  }
}

class FooterView extends React.Component {
    constructor(props) {
      super(props);
}

render() {
    return(
          <View style={styles.footer}>
            <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText}>AdMob Space</Text>
            </TouchableHighlight>
          </View>
    );
  }
}

class ContainerView extends React.Component {
    constructor(props) {
      super(props);
}

render() {
    return(
        <View>
           <HeaderView/>
           <TabbedView/>
           <ScrollView>
              <PlaylistView/>
           </ScrollView>
        </View>
    );
  }
}

class TabbedView extends React.Component {
    constructor(props) {
      super(props);
}

render() {
    return(
        <View>
            <Text style={styles.footerText}> ALL | UNPLAYED | FAVORITE | DOWNLOADED </Text>
        </View>
    );
  }
}