import React from "react";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';
import DetailsScreen from "../../DetailsScreen";
import MainScreen from "../../MainScreen";


const BottomNavigation = createBottomTabNavigator({
    Home: {
        screen: MainScreen,
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