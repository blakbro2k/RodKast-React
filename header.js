/**
        <View>
            <Icon name='menu' color='#fff'/>
            <Image
                source={{ uri: 'https://rodkast.com/wp-content/uploads/2018/01/rodkast-logo_1.jpg' }}
                style={{ width: 75, height: 75 }}
            />
            <Icon name='settings' color='#fff'/>
        </View>
 */
import React, {Component} from 'react';
import {Header, Image} from 'react-native-elements';
import styles from './style';

export default class HeaderView extends React.Component {
    constructor(props) {
     super(props);
    }

render() {
    return(
        <Header
            leftComponent={{ icon: 'menu', style: { color: '#ccc' } }}
            centerComponent={<RodKastIcon/>}
            rightComponent={{ icon: 'settings', style: { color: '#fff' } }}
            containerStyle={{
                backgroundColor: '#fff',
                justifyContent: 'space-around',
            }}
        />
    );
  }
}

class RodKastIcon extends React.Component {
    constructor(props) {
      super(props);
    }

render() {
    return(
        <Image
          source={{ uri: 'https://rodkast.com/wp-content/uploads/2018/01/rodkast-logo_1.jpg' }}
          style={{ width: 55, height: 55 }}
        />
    );
  }
}