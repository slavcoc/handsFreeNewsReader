import React, { Components } from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
import Tabsich from "./components/navigation/HeaderNav";
import StoryCard from "./components/body/Card-auto";


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
    backgroundColor: '#ffff',
  }
});

export default LoginScreen;