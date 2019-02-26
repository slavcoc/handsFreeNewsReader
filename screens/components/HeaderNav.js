import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Image } from "react-native";
import { Container, Header, Tab, Tabs, ScrollableTab, View } from 'native-base';

export default function Tabsich(props) {
  const categories = [{
      id: 0,
      title: 'General',
      img: ''
    }, {
      id: 1,
      title: 'Business',
      img: ''
    }, {
      id: 2,
      title: 'Entertainment',
      img: ''
    }, {
      id: 3,
      title: 'Health',
      img: ''
    }, {
      id: 4,
      title: 'Science',
      img: ''
    }, {
      id: 5,
      title: 'Sports',
      img: ''
    }, {
      id: 6,
      title: 'Technology',
      img: ''
    }];

    return(
    <ScrollView horizontal={true}>
      {categories.map(e => {
        return (
          <ScrollView key={e.id} scrollEventThrottle={16}>
            <View style={{height:100, width:110, flex: 1, padding:10}}>
              <Image style={{flex: 1, borderRadius:10, width: null, height: null, resizeMode:'cover'}} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
              <Text>{e.title}</Text>
            </View>
          </ScrollView>
        );
      })}
    </ScrollView>
    );
    
}

const styles = {
  backgroundColor: 'black'
};