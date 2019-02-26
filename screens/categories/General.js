import React, { Components } from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";


class General extends React.Component {
  render() {
    return (
      <View>
        <Text>General Screen</Text>
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

export default General;