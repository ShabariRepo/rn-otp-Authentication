import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupForm from './components/SignupForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';
//import Logo from './components/logo';

export default class App extends React.Component {
  // lifecycle when load
  componentDidMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyCilIDoMrFsdZLVEcz27THnSUDh-gO5ogI",
      authDomain: "one-time-password-fd380.firebaseapp.com",
      databaseURL: "https://one-time-password-fd380.firebaseio.com",
      projectId: "one-time-password-fd380",
      storageBucket: "one-time-password-fd380.appspot.com",
      messagingSenderId: "989330352766"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Logo /> */}
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
