import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import firebase from "firebase";
import { provider } from "../conf/firebase";

class LoginScreen extends React.Component {
  test() {
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login Screen</Text>
        <Button
          style={styles.button}
          title="Sign In"
          onPress={() => this.test()}
        />
        <Button
          style={styles.button}
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    marginTop: '50px !important'
  }
});

export default LoginScreen;