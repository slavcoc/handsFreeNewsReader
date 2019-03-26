import React from 'react';
import {  StyleSheet, Alert} from "react-native";
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import https from '../../../axios';
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
      }],
      dataSource: [],
      index: 0
  };
  this._onPressButton = this._onPressButton.bind(this);
}
 _onPressButton(e) {
    Alert.alert(`Category is - ${e}`)
  }

  componentDidMount() {
    https.data.getData()
      .then(res => {
        this.setState({
        dataSource: res.data.articles
      })
    })
    // https.sources.getSources()
    //   .then(res => console.log(res))
  };

  changeCategory(categoryID) {
   const category = this.state.categories.find(el => el.id === categoryID);
   https.data.getDataByCategory(category.title.toLowerCase())
    .then(res => {
      this.setState({
        dataSource: res.data.articles
      })
    })
  }

render() {
  return(
    <Container>
        <Tabs locked={true} onChangeTab={({i}) => this.changeCategory(i)} renderTabBar={()=> <ScrollableTab />}>
        {this.state.categories.map(e =>  
          <Tab key={e.id} heading={e.title}>
            <StoryCard data={this.state.dataSource}/>
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
