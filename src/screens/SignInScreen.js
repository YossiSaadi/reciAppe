import React from 'react';
import signBackgroundImage from '../../assets/signBackgroundImage.png';
import { authSignInWithEmailAndPassword } from '../firebase/auth';
import SignInterface from '../components/SignInterface';

const SignInScreen = () => {
  return (
    <SignInterface
      backgroundSource = { signBackgroundImage }
      title = { 'Sign In' }
      signNavLinkText = { `Don't have an account yet? Sign up` }
      signNavLinkRouteName = { 'SignUp' }
      signMethod = { authSignInWithEmailAndPassword }
    />
  );
};

export default SignInScreen;
