import React from "react";
import { View, StyleSheet } from "react-native";
import Tabsich from "./components/navigation/HeaderNav";


class HomeScreen extends React.Component {
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

export default HomeScreen;