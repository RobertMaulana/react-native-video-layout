import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Header, Content } from './components'

class App extends Component {
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor='#202020'
          barStyle='light-content'
        />
        <Header title={'Playback'}/>
        <Content />
      </View>
    )
  }
}

export default App;
