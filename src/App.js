import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Content } from './components'

class App extends Component {
  render() {
    return (
      <View>
        <Header title={'Playback'}/>
        <Content />
      </View>
    )
  }
}

export default App;
