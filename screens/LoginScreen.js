import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from 'react-native-firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';


export default class Login extends Component {
  GoogleSignIn = async () => {
    try {
      await GoogleSignin.configure();
      const data = await GoogleSignin.signIn();
      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
      console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  FbSignIn = async () => {
    try {
      const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        // handle this however suites the flow of your app
        throw new Error('User cancelled request'); 
      }
      console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
      // get the access token
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        // handle this however suites the flow of your app
        throw new Error('Something went wrong obtaining the users access token');
      }
      // create a new firebase credential with the token
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
      // login with credential
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
      console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()))
    } catch (e) {
      console.error(e);
    }
  };
  anonymousSignIn () {
    firebase.auth().signInAnonymously()
     .then(() => {
       console.log('user sign in anonymously')
     })
  }

  anonymousSignIn = async () => {
    try {
      await firebase.auth().signInAnonymously();
    } catch (e) {
      console.log('error', e)
    }
  }
  
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Login Page</Text>
      <Text>Please choose you'r login provider</Text>
        <View style={{padding: 20, width: '80%'}}>
          <Button 
            onPress={this.FbSignIn}
            title="Continue with Facebook"
            color="#3C5A99"
          />
        </View>
        <View style={{width: '80%', paddingLeft: 20, paddingRight: 20}}>
          <Button 
            onPress={this.GoogleSignIn}
            title="Continue with Google"
            color="#4285F4"
          />
        </View>
        <View style={{width: '80%', padding: 20}}>
          <Button 
            onPress={this.anonymousSignIn}
            title="Remain anonymous"
            color="#D3D3D3"
          />
        </View>
      </View>
    );
  }
};