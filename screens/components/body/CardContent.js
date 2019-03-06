import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const device_width = Dimensions.get('window').width;

export default class CardContent extends Component {
  render() {
    return (
      <Container style={{padding: 10, width: device_width}}>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>{this.props.medium}</Text>
                  <Text note>{this.props.date}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: this.props.url}} style={{width: device_width - 50, height: 200, flex: 1}}/>
                <Text style={{width: '100%'}}>
                 {this.props.description}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}