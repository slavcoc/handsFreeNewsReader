import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { Container, Header, Tab, Tabs, ScrollableTab, View } from 'native-base';

export default function Category(props) {
  return(
    <ScrollView style={{height:100}}  scrollEventThrottle={16}>
      <View style={{height:100, width:110, flex: 1, padding:10}}>
        <Image style={{flex: 1, borderRadius:10, width: null, height: null, resizeMode:'cover'}} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
        <Text>{props.title}</Text>
      </View>
    </ScrollView>
  );
}

const styles = {
  backgroundColor: 'black'
};