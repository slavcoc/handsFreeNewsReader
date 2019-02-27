import React, { Components } from "react";
import { View, Button, Text, Image, FlatList, StyleSheet } from "react-native";

class StoryCard extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: []
    }
  };

  _keyExtractor = (item, index) => item.id;

  renderItem = ({item}) => {
    return (
    <View>
        <Text>
          {item.title}
        </Text>
    </View>
    )
  };

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
      <View style={styles.container}>
        <FlatList
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default StoryCard;