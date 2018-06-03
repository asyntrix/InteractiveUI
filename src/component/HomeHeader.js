import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");

const HomeHeader = props => (
  <View style={styles.container}>
    <View style={styles.header} />
    <View style={styles.content}>
      <Text>Hello Header</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 400
  },
  content: {
    flex: 1,
    marginTop: 20
  },
  header: {
    width: window.width,
    height: 400,
    backgroundColor: "red",
    marginTop: -100,
    position: "absolute",
    borderBottomLeftRadius: window.width / 2,
    borderBottomRightRadius: window.width / 2,
    transform: [{ scaleX: 1.3 }, { rotate: "40deg" }]
  }
});

export default HomeHeader;
