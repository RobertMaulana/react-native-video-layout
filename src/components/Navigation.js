import React, { Component } from 'react';
import { View, Image } from 'react-native';
const play = require('./asset/icon/play-button.png');
const sound = require('./asset/icon/speaker.png');
const hd = require('./asset/icon/hd-sign.png');

class Navigation extends Component {
  render() {
    const { container, icon, progress, progressBar } = styles;
    return(
      <View style={container}>
        <Image
          source={play}
          style={icon}
        />
        <Image
          source={sound}
          style={icon}
        />
        <View style={progress}>
          <View style={progressBar}/>
        </View>
        <Image
          source={hd}
          style={icon}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    position: 'absolute',
    bottom: 150,
    right: 10,
    left: 10,
    padding: 20,
    backgroundColor: '#202020',
    flexDirection: 'row',
    borderRadius: 5
  },
  icon: {
    tintColor: '#fff',
    height: 16,
    width: 16,
    marginLeft: 5,
    marginRight: 5
  },
  progress: {
    backgroundColor: '#000',
    borderRadius: 7,
    flex: 1,
    height: 10,
    margin: 4
  },
  progressBar: {
    backgroundColor: '#bf161c',
    borderRadius: 7,
    height: 8,
    width: '40%',
    margin: 1
  }
}

export default Navigation;
