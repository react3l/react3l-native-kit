import { createStackNavigator } from '@react-navigation/stack';
import type { PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import TabNavigator from '../TabNavigator';

export function RootNavigator(
  props: PropsWithChildren<RootNavigatorProps>
): ReactElement {
  const { children } = props;

  const { Navigator, Screen } = React.useRef(createStackNavigator()).current;

  return (
    <>
      {children}
      <Navigator
        initialRouteName={TabNavigator.displayName!}
        screenOptions={{
          headerShown: false,
        }}
      >
        {[TabNavigator].map((ScreenComponent) => (
          <Screen
            name={ScreenComponent.displayName!}
            component={ScreenComponent}
          />
        ))}
      </Navigator>
    </>
  );
}

export interface RootNavigatorProps {
  //
}

RootNavigator.defaultProps = {
  //
};

RootNavigator.displayName = nameof(RootNavigator);

export default RootNavigator;
