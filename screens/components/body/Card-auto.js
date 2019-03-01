import React, { Components } from "react";
import { View, Dimensions, Text, ImageBackground, FlatList, StyleSheet } from "react-native";

const device_width = Dimensions.get('window').width;
const device_height = Dimensions.get('window').height;

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
    setTimeout(() => {
      this.flatListRef.scrollToIndex({animated: true, index: this.state.index});
    }, 3000)
  }

  renderItem = ({item}) => 
  <View style={{width: device_width,
  height: '100%'}}>
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

    setInterval(() => (
      this.moveToPage()
    ), 6000);
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
          centerContent={true}
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
    backgroundColor: '#F5FCFF',
  }
});

export default StoryCard;