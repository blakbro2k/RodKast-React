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

import styles from './Style';

type Props = {};
export default class PlaylistView extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ContainerView/>
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
                  <View>
                    <Text style={styles.firstrow}> Example for ScrollView and Fixed Footer</Text>
                  </View>
                  <View>
                    <Text style={styles.secondrow}> Example for ScrollView and Fixed Footer</Text>
                  </View>
                  <View>
                    <Text style={styles.thirdrow}> Example for ScrollView and Fixed Footer</Text>
                  </View>
                  <View>
                    <Text style={styles.fourthrow}> Example for ScrollView and Fixed Footer</Text>
                  </View>
                  <View>
                    <Text style={styles.firstrow}> Example for ScrollView and Fixed Footer</Text>
                  </View>
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