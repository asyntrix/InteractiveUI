import { FluidNavigator } from "react-navigation-fluid-transitions";
import FirstScreen from "../screen/FirstScreen";
import SecondScreen from "../screen/SecondScreen";
import ThirdScreen from "../screen/ThirdScreen";

const route = FluidNavigator(
  {
    screen1: {
      screen: FirstScreen
    },
    screen2: {
      screen: SecondScreen
    },
    screen3: {
      screen: ThirdScreen
    }
  },
  {
    initialRouteName: "screen1",
    navigationOptions: {
      header: null,
      esturesEnabled: true
    }
  }
);

export default route;
