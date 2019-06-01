import React from 'react';
import {
    createSwitchNavigator,
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import Splash from '../screens/Splash';
import Login from '../screens/Login';

import Home from '../screens/Home';
import Camera from '../screens/Camera';
import Helps from '../screens/Helps';
import Profile from '../screens/Profile';

import BottomTabBar from '../components/BottomTabBar'


const AuthStack = createStackNavigator({
    Login: Login
}, {
        headerMode: "none"
    });


const SecureApp = createBottomTabNavigator({
    Home: Home,
    Camera: Camera,
    Helps: Helps,
    Profile: Profile
}, {
        tabBarComponent: props => <BottomTabBar
            {...props}
        />,
        animationEnabled: true,
        swipeEnabled: true
    });

const SecureWithModal = createStackNavigator({
    SecureApp: SecureApp,
    /**
     * MODALS HERE
     */
}, {
        headerMode: 'none'
    })

export default createAppContainer(createSwitchNavigator({
    Splash: Splash,
    Auth: AuthStack,
    App: SecureWithModal
}, {
        initialRouteName: 'Splash'
    }
));
