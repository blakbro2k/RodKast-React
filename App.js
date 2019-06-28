/**
 * Rodkast React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Modal, Platform, Text, View, TouchableHighlight, ScrollView} from 'react-native';
import {Button, ThemeProvider, Icon, Image} from 'react-native-elements';

import HeaderView from './header'
import PlayerView from './player';
import {EpisodeCmp, PlaylistView} from './content'
import styles from './style';


type Props = {};
export default class App extends Component<Props> {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                }}>
                <View style={{marginTop: 22}}>
                  <PlayerView/>
                  <View>
                    <TouchableHighlight
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      <Text>Hide Modal</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
                      <TouchableHighlight
                        onPress={() => {
                          this.setModalVisible(true);
                        }}>
                        <Text>X</Text>
                      </TouchableHighlight>
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