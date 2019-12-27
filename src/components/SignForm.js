import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { useSignFormInputModel } from '../hooks/useSignFormInputModel';

import { Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;

const SignForm = ({ buttonTitle, onPressButton, errorMessage }) => {
  const { inputProps, states } = useSignFormInputModel();

  return (
    <View style = { styles.container }>
      <Input { ...inputProps.email } />
      <Input { ...inputProps.password } />
      { errorMessage ? <Text style = { styles.errorMessage }>{ errorMessage }</Text> : null }
      <Button title = { buttonTitle } onPress = { () => onPressButton(states) } buttonStyle = { styles.button } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  errorMessage: {
    color: '#ed2c29',
    fontSize: 12
  },
  button: {
    backgroundColor: '#000',
    width: WIDTH - 25,
    marginVertical: 10
  }
});

export default SignForm;
