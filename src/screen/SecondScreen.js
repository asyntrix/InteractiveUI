import React, { Component } from "react";
import { Text, View, Button, StyleSheet, Dimensions } from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import Svg, { Path } from "react-native-svg";

const window = Dimensions.get("window");

export default class Screen2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Transition appear="top" disappear="vertical">
          <Svg
            width={window.width}
            height="200"
            style={{ position: "absolute", zIndex: 99 }}
          >
            <Path
              d={`M0 0 h ${
                window.width
              } , 0 v0, 100 c -30 100, -200 40, ${-window.width} 0`}
              stroke="none"
              fill="red"
            />
          </Svg>
        </Transition>
        <Transition appear="top" disappear="scale">
          <Text
            style={{
              color: "white",
              zIndex: 1000,
              alignSelf: "center",
              top: 30,
              position: "absolute"
            }}
          >
            Hello World
          </Text>
        </Transition>
        <Transition appear="top" disappear="fate" shared="container">
          <View
            style={{
              position: "absolute",
              top: 50,
              marginBottom: 100,
              alignSelf: "center",
              backgroundColor: "blue",
              height: 100,
              width: window.width - 50
            }}
          />
        </Transition>
        <View style={{ zIndex: 999 }}>
          <Button title="Back" onPress={() => this.props.navigation.goBack()} />
          <Button
            title="Screen 3"
            onPress={() => this.props.navigation.navigate("screen3")}
          />
        </View>
      </View>
    );
  }
}
