import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from "react-native";
import Category from './header/Category';

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
        title: 'Tusiness',
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
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {this.state.categories.map(e => {
        return (
        <TouchableOpacity key={e.id} onPress={()=> this._onPressButton(e.title)}>
            <Category title={e.title} />
        </TouchableOpacity>
        )
      })}
    </ScrollView>
    );
} 
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
