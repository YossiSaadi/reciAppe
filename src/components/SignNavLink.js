import React from 'react';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, StyleSheet } from 'react-native';

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
