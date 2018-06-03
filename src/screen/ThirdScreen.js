import React, { Component } from "react";
import { Text, View, Button, Dimensions } from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import Svg, { Path } from "react-native-svg";

const window = Dimensions.get("window");

export default class ThirdScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Transition shared="container">
          <View
            style={{
              alignSelf: "center",
              backgroundColor: "blue",
              height: 200,
              width: window.width
            }}
          />
        </Transition>
        <Text> textInComponent </Text>
        <Button onPress={() => this.props.navigation.goBack()} title="back" />
      </View>
    );
  }
}
