import React, { Components } from "react";
import { View, Dimensions, Text, ImageBackground, FlatList, StyleSheet } from "react-native";

class StoryCard extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: []
    }
  };

  _keyExtractor = (item, index) => item.id;

  renderItem = ({item}) => 
  <View style={{width: Dimensions.get('window').width,
  height: Dimensions.get('window').height}}>
    <ImageBackground source={{uri: item.urlToImage}} style={{width: '100%', height: '100%'}}>
      <Text>{item.title}</Text>
    </ImageBackground>
  </View>;

  componentDidMount() {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ad719598305c4ce580bf8cb1bee981ed"
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
        dataSource: response.articles
      })
      console.log(this.state.dataSource)
    })
    
  };
  
  render() {
    return (
      <View>
        <FlatList
          pagingEnabled={true}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default StoryCard;