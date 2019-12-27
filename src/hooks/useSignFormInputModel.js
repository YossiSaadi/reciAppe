import { useState } from 'react';

import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export const useSignFormInputModel = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const styleProps = {
    inputStyle: styles.input,
    containerStyle: styles.inputContainer
  };

  return {
    inputProps: {
      email: {
        ...styleProps,
        value: email,
        onChangeText: setEmail,
        placeholder: 'Email',
        autoCompleteType: 'email'
      },
      password: {
        ...styleProps,
        value: password,
        onChangeText: setPassword,
        placeholder: 'Password',
        autoCompleteType: 'password'
      }
    },
    states: {
      email,
      password
    }
  };
};

const styles = {
  input: {
    width: 20,
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 10
  },
  inputContainer: {
    width: WIDTH - 10,
    marginBottom: 25
  }
};
