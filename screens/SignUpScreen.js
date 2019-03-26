import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

class SignUpScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Sign Up Screen</Text>
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
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
  }
});

export default SignUpScreen;