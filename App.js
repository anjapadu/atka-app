/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  Provider
} from 'react-redux';
import {
  PersistGate
} from 'redux-persist/integration/react'
import AppRouter from './src/router'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NetInfo } from 'react-native';
// if (Platform.OS == 'ios')
// Icon.loadFont();
import createStore from './src/store';
import FullScreenLoader from './src/components/FullScreenLoader';
const {
  store,
  persistor
} = createStore();


export default class App extends PureComponent {
  componentDidMount() {
    // this.CheckConnectivity()
  }
  // CheckConnectivity = () => {
  //   // For Android devices
  //   if (Platform.OS === "android") {
  //     NetInfo.isConnected.fetch().then(isConnected => {
  //       if (isConnected) {
  //         // Alert.alert("You are online!");
  //       } else {
  //         // Alert.alert("You are offline!");
  //       }
  //     });
  //   } else {
  //     // For iOS devices
  //     NetInfo.isConnected.addEventListener(
  //       "connectionChange",
  //       this.handleFirstConnectivityChange
  //     );
  //   }
  // };

  // handleFirstConnectivityChange = isConnected => {
  //   NetInfo.isConnected.removeEventListener(
  //     "connectionChange",
  //     this.handleFirstConnectivityChange
  //   );

  //   if (isConnected === false) {
  //     // Alert.alert("You are offline!");
  //   } else {
  //     // Alert.alert("You are online!");
  //   }
  // };
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<FullScreenLoader
            startOn
          />}
          persistor={persistor}
        >
          <AppRouter />
        </PersistGate>
      </Provider>
    );
  }
}
