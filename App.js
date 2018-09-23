import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupForm from './components/SignupForm';
import SignInForm from './components/SignInForm';
import Logo from './components/logo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <SignupForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b19cd9',//'#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
