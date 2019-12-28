import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Image } from 'react-native-elements';
import logo from '../../assets/logo2.png';
import { withNavigation } from 'react-navigation';
import SignForm from '../components/SignForm';
import SignNavLink from '../components/SignNavLink';

const SignInterface = withNavigation(({ navigation, backgroundSource, title, signNavLinkText, signNavLinkRouteName, signMethod, socialTitle }) => {
  const [ errorMessage, setErrorMessage ] = useState('');

  const onPressingSign = async (signMethod, credentials) => {
    try {
      await signMethod(credentials);
      alert('Welcome!');
      navigation.navigate('Main');
    } catch (e) {
      console.log(credentials);
      setErrorMessage(e.message);
    }
  };

  return (
    <ImageBackground source = { backgroundSource } style = { styles.backgroundContainer }>
      <View style = { styles.logoContainer }>
        <Image source = { logo } style = { styles.logo }/>
      </View>
      <View style = { styles.container }>
        <SignForm
          buttonTitle = { title }
          onPressButton = { (credentials) => onPressingSign(signMethod, credentials) }
          errorMessage = { errorMessage }
        />
        <View style = { styles.navLink }>
          <SignNavLink text = { signNavLinkText } routeName = { signNavLinkRouteName } />
        </View>
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50
  },
  navLink: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5
  },
  logoContainer: {
    marginTop: 50,
    alignItems: 'center'
  },
  logo: {
    height: 100,
    width: 230,
    opacity: 0
  }
});

export default SignInterface;
