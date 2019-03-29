import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert, ScrollView, Image } from "react-native";
import { Container, Header, Tab, Tabs, ScrollableTab, View } from 'native-base';
import StoryCard from "../body/Card-auto";

export default class Tabsich extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    categories:[
      {
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
      }]
  };
  this._onPressButton = this._onPressButton.bind(this);
}
 _onPressButton(e) {
    Alert.alert(`Category is - ${e}`)
  }
render() {
  return(
    <Container>
        <Tabs locked={true} renderTabBar={()=> <ScrollableTab />}>
        {this.state.categories.map(e =>  
          <Tab key={e.id} heading={e.title}>
            <StoryCard />
          </Tab>
        )}
        </Tabs>
      </Container>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center'
  },
  button: {
    marginBottom: 10,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
