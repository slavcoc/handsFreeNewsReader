import {createAppContainer, createStackNavigator } from "react-navigation";
import AuthenticationNavigator from "./AuthenticationNav";
import BottomNavigation from "./BottomNav";

const MainNavigator = createStackNavigator({
    Auth: AuthenticationNavigator,
    UsersHome: BottomNavigation,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });


const Navigation = createAppContainer(MainNavigator);

export default Navigation;