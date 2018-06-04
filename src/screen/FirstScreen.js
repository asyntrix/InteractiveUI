import React, { Component } from "react";
import { View, Button, Dimensions } from "react-native";
import { Transition } from "react-navigation-fluid-transitions";
import Svg, { Path } from "react-native-svg";
import HomeHader from "../component/HomeHeader";

const window = Dimensions.get("window");

export default class Screen2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Transition appear="top" disappear="vertical">
          <Svg
            style={{ position: "absolute", zIndex: -99 }}
            width={`${window.width}`}
            height="300"
          >
            <Path
              d={`M0 0 h ${
                window.width
              } , 0 v0, 200 c -30 100, -200 100, ${-window.width} 0`}
              fill="red"
            />
          </Svg>
        </Transition>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 200
          }}
        >
          <Transition appear="top" shared="container">
            <View
              style={{ backgroundColor: "blue", height: 100, width: 100 }}
            />
          </Transition>
          <Button
            title="Next"
            onPress={() => this.props.navigation.navigate("screen2")}
          />
        </View>
      </View>
    );
  }
}
