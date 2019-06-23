/**
 * Rodkast React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$rodkastBlue',
    color: "#fff",
  },

  firstrow: {
    flex: 1,
    backgroundColor: "#ffc857",
  },

  secondrow: {
    flex: 1,
    backgroundColor: "#4b3f72",
  },

  thirdrow: {
    flex: 1,
    backgroundColor: "#119da4",
  },

  fourthrow: {
    flex: 1,
    backgroundColor: "#19647e",
  },

  header: {
    backgroundColor: "$headerBlue",
    position: 'absolute',
    flex: .5,
    left: 0,
    right: 0,
    bottom: -10,
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
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
    borderColor: 'blue',
  }
});

export default styles;