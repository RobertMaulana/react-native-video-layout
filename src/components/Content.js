import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Navigation from './Navigation';
const uri = {
  uri: 'https://s-media-cache-ak0.pinimg.com/736x/c8/7a/ab/c87aabbd6777355ad4f4b27d5c899e42.jpg'
}

class Content extends Component {
  render() {
    const { container } = styles;
    return (
      <View>
        <Image
          source={uri}
          style={container}
        />
        <Navigation />
      </View>
    )
  }
}

const styles = {
  container: {
    width: null,
    height: '100%'
  }
}

export { Content }
