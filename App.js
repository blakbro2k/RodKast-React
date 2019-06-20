/**
 * Rodkast React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {Button, ThemeProvider, Icon, Header, Image} from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ContainerView/>
          <View style={styles.footer}>
            <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText}>AdMob Space</Text>
            </TouchableHighlight>
          </View>
      </View>
    );
  }
}

class HeaderIcon extends React.Component {
    constructor(props) {
      super(props);
}

render() {
    return(
        <Image
            source={{ uri: 'https://rodkast.com/wp-content/uploads/2018/01/rodkast-logo_1.jpg' }}
            style={{ width: 75, height: 75 }}
        />
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
              <Header
                placement="center"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ HeaderIcon }}
                rightComponent={{ icon: 'settings', color: '#fff' }}
              />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2041',
  },

  firstrow: {
    flex: 1,
    backgroundColor: "#ffc857"
  },

  secondrow: {
    flex: 1,
    backgroundColor: "#4b3f72"
  },

  thirdrow: {
    flex: 1,
    backgroundColor: "#119da4"
  },

  fourthrow: {
    flex: 1,
    backgroundColor: "#19647e"
  },

  footerText: {
    color:'white',
    fontWeight:'bold',
    alignItems:'center',
    fontSize:18,
  },

  footer: {
    position: 'absolute',
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor: 'green',
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
  },

  scrollViewStyle: {
    borderWidth: 2,
    borderColor: 'blue'
  }
});