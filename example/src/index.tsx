import 'react-native-gesture-handler';
import type { ReactElement } from 'react';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator/RootNavigator';
import { enableScreens } from 'react-native-screens';
import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';

enableScreens();

export default function App(): ReactElement {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);
