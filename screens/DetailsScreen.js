import React, { Components } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{position: "absolute", top: 0, bottom: 0, left: 0, right: 0}}>
        <Text>Details Screen</Text>
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

export default DetailsScreen;