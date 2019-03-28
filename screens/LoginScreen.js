import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

class LoginScreen extends React.Component {
  test() {
    
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