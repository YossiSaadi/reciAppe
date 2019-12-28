import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const SignNavLink = withNavigation(({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress = { () => navigation.navigate(routeName) }>
      <Text style = { styles.link }>{ text }</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  link: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500'
  }
});

export default SignNavLink;
