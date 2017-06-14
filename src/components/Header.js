import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
const favorite = require('./asset/icon/favorite.png');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    }
  }

  _onPressButton() {
    this.setState({liked: !this.state.liked})
  }

  render() {
    const { container, textStyle, icon, containerIcon, btn, liked } = styles;
    const { title } = this.props;
    const likedStyle = this.state.liked ? liked : null;
    return (
      <View style={container}>
        <Text style={textStyle}>{title}</Text>
        <TouchableHighlight
          onPress={() => this._onPressButton()}
          style={btn}
          underlayColor='#64DD17'
        >
          <Image
          source={favorite}
          style={[icon, likedStyle]}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = {
  container: {
    padding: 20,
    backgroundColor: '#202020',
    shadowOffset: { width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 5,
    flexDirection: 'row'
  },
  textStyle: {
    fontSize: 22,
    color: '#fff',
    justifyContent: 'flex-start'
  },
  btn: {
    borderRadius: 14,
    padding: 5,
    position: 'absolute',
    right: 20,
    top: 25,
  },
  icon: {
    tintColor: '#fff',
    height: 20,
    width: 20,
  },
  liked: {
    tintColor: '#64DD17'
  }
}

export { Header }
