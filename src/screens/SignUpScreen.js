import React from 'react';
import signBackgroundImage from '../../assets/signBackgroundImage.png';
import { authCreateUserWithEmailAndPassword } from '../firebase/auth';
import SignInterface from '../components/SignInterface';

const SignUpScreen = () => {
  return (
    <SignInterface
      backgroundSource = { signBackgroundImage }
      title = { 'Sign Up' }
      signNavLinkText = { `Already have an account? Sign in` }
      signNavLinkRouteName = { 'SignIn' }
      signMethod = { authCreateUserWithEmailAndPassword }
    />
  );
};

export default SignUpScreen;
