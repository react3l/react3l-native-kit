import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'example/src/screens/HomeScreen';
import type { PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';

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
      <Navigator>
        {[HomeScreen].map((ScreenComponent) => (
          <Screen
            name={ScreenComponent.displayName!}
            component={ScreenComponent}
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
