import {createAppContainer, createStackNavigator } from "react-navigation";
import MainScreen from "../../MainScreen";

const MainNavigator = createStackNavigator({
    AuthHome: MainScreen,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });


const Navigation = createAppContainer(MainNavigator);

export default Navigation;