import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Icon } from 'react-native-elements';

import DetailsScreen from "../DetailsScreen";
import HomeScreen from "../HomeScreen";

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

const Navigation = createAppContainer(BottomNavigation);

export default Navigation;