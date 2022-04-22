import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StrictMode } from 'react';
import { Platform, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import React3lNativeKit from 'react3l-native-kit';
import RootNavigator from './navigators/RootNavigator';
import { store } from './store';

enableScreens();

if (__DEV__) {
  React3lNativeKit.activateKeepAwake();
}

export default function App() {
  return (
    <StrictMode>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <NavigationContainer>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </NavigationContainer>
    </StrictMode>
  );
}
