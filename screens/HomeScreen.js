import React, { Components } from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
import Tabsich from "./components/HeaderNav"


class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabsich/>
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

export default LoginScreen;