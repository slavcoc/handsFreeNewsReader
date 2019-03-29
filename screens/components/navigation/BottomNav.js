import { createBottomTabNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';
import DetailsScreen from "../../DetailsScreen";
import HomeScreen from "../../HomeScreen";


const BottomNavigation = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: 'Home',
            tabBarIcon: ({tintColor}) => (
                <Icon name="list" color={tintColor} size={32} />
            )
        })
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: () => ({
            title: 'Details',
            tabBarIcon: ({tintColor}) => (
                <Icon name="list" color={tintColor} size={32} />
            )
        })
    },
});


export default BottomNavigation;