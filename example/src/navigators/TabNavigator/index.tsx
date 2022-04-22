import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'example/src/screens/HomeScreen';
import type { PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import Feather from 'react-native-vector-icons/Feather';
export function TabNavigator(
  props: PropsWithChildren<TabNavigatorProps>
): ReactElement {
  const { children } = props;

  const { Navigator, Screen } = React.useRef(
    createBottomTabNavigator()
  ).current;

  return (
    <>
      {children}
      <Navigator initialRouteName={HomeScreen.displayName!} screenOptions={{}}>
        {[HomeScreen].map((ScreenComponent) => (
          <Screen
            name={ScreenComponent.displayName!}
            component={ScreenComponent}
            options={{
              tabBarIcon: ({ color, size }) => {
                switch (ScreenComponent.displayName!) {
                  case HomeScreen.displayName!:
                    return <Feather size={size} name="home" color={color} />;
                }
                return <></>;
              },
            }}
          />
        ))}
      </Navigator>
    </>
  );
}

export interface TabNavigatorProps {
  //
}

TabNavigator.defaultProps = {
  //
};

TabNavigator.displayName = nameof(TabNavigator);

export default TabNavigator;
