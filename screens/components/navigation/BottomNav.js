import React from "react";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';
import DetailsScreen from "../../DetailsScreen";
import HomeScreen from "../../HomeScreen";


const BottomNavigation = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon name="home" color={tintColor} size={32} />
            )
        })
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon name="dashboard" color={tintColor} size={32} />
            )
        })
    },
    Search: {
        screen: DetailsScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon name="search" color={tintColor} size={32} />
            )
        })
    },
    Profile: {
        screen: DetailsScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon name="face" color={tintColor} size={32} />
            )
        })
    },
},
{
    tabBarOptions: {
        showLabel: false
    }
}
);


const InAppNav = createAppContainer(BottomNavigation);

export default InAppNav;