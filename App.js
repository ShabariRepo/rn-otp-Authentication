import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupForm from './components/SignupForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignupForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cec1e7',//'#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
