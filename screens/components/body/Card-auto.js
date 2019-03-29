import React, { Components } from "react";
import { View, Dimensions, FlatList, StyleSheet } from "react-native";
import CardContent from "./CardContent";

class StoryCard extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      index: 0
    }
  };

  _keyExtractor = (item, index) => item.id;

  moveToPage()
  {
    let curIndex = this.state.index
    this.setState({
      index: curIndex + 1
    })
    // setTimeout(() => {
    //   this.flatListRef.scrollToIndex({animated: true, index: this.state.index});
    // }, 3000)
  }

  renderItem = ({item}) => 
    <CardContent medium={item.source.name} title={item.title} date={item.publishedAt} url={item.urlToImage} description={item.description}/>;

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

    // setInterval(() => (
    //   this.moveToPage()
    // ), 6000);
  };


  // Need to add function for tracking pages and update on swipe left or right
  // Need to implement on hold to stop the timer
  // rethink the UI
  test(e) {
    console.log('viewch', e)
  }
  
  render() {
    return (
      <View>
        <FlatList
          ref={(ref) => { this.flatListRef = ref; }}
          pagingEnabled={true}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.dataSource}
          renderItem={this.renderItem}
          onViewableItemsChanged={this.test}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  title: {
    color: 'white',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  description: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    padding: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});

export default StoryCard;