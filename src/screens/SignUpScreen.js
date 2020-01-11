import React from 'react';
import signBackgroundImage from '../../assets/signBackgroundImage.png';
import SignInterface from '../components/SignInterface';
import useBackendUsers from "../hooks/useBackendUsers";
import {getCurrentUser} from "../firebase/auth";
import { authCreateUserWithEmailAndPassword } from '../firebase/auth';

const SignUpScreen = () => {
    const { postUser } = useBackendUsers ();
    return (
    <SignInterface
      backgroundSource = { signBackgroundImage }
      title = { 'Sign Up' }
      signNavLinkText = { `Already have an account? Sign in` }
      signNavLinkRouteName = { 'SignIn' }
      signMethod = {
          async ({email, password}) => {
            await authCreateUserWithEmailAndPassword ({email, password});
            const userId = getCurrentUser().uid;
            await postUser(userId);
          }
      }
    />
  );
};

export default SignUpScreen;