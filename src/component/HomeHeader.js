import React, { Component } from "react";
import { Text, View } from "react-native";

export default class HomeHeader extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should updated call");
    return true;
  }

  componentDidUpdate(prevState, prevProps) {
    console.log(`did update called${this.props}`);
  }

  componentWillUnmount() {
    console.log("component unmount");
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
