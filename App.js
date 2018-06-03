/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import Route from "./src/config/route";
import { Provider } from "mobx-react";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Route />
      </Provider>
    );
  }
}
