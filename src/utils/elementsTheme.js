import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default {
  Text: {
    style: {
      textAlign: 'left'
    }
  },
  Button: {
    buttonStyle: {
      backgroundColor: '#000000',
      width: WIDTH - 25,
      marginVertical: 10,
    }
  },
  Input: {
    placeholderTextColor: 'rgba(255, 255, 255, 1)',
    autoCorrect: false,
    autoCapitalize: 'none',
    textAlign: 'left'
  },
  Icon: {
    type: 'material-community',
    size: 30
  },
  Avatar: {
    rounded: true,
    showEditButton: true,
    activeOpacity: 0.7
  },
  Card: {
    width: WIDTH
  },
  SearchBar: {
    platform: "default",
    lightTheme: true,
    showCancel: true,
    autoCapitalize: 'words',
    autoCorrect: true,
    placeholderTextColor: '#cacfcc',
    round: true
  }
};
