import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

const SpinnerLoader = () => {
  return (
    <ActivityIndicator size = "large" color = "#1c72a9" style = { styles.spinner } />
  );
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    marginTop: 50
  }
});

export default SpinnerLoader;
