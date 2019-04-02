import {createAppContainer, createStackNavigator } from "react-navigation";
import BottomNav from './BottomNav';

const MainNavigator = createStackNavigator({
    AuthHome: BottomNav,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });


const Navigation = createAppContainer(MainNavigator);

export default Navigation;