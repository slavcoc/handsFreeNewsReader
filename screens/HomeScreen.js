import React, { Components } from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
import Tabsich from "./components/HeaderNav"


class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Tabsich/>
        </View>
        <View>
          <Text>Home</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  }
});

export default LoginScreen;