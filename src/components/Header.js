import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { container, textStyle } = styles;
    const { title } = this.props;
    return (
      <View style={container}>
        <Text style={textStyle}>{title}</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    padding: 20,
    backgroundColor: '#202020',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2},
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 5
  },
  textStyle: {
    fontSize: 20,
    color: '#fff'
  }
}

export { Header }
