import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import './RootNavigator.scss';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from '../DrawerNavigator/DrawerNavigator';

const { Navigator, Screen } = createStackNavigator();

/**
 * File: RootNavigator.tsx
 * @created 2021-08-10 23:12:00
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<RootNavigatorProps>>}
 */
const RootNavigator: FC<PropsWithChildren<RootNavigatorProps>> =
  (): ReactElement => {
    return (
      <Navigator
        initialRouteName={DrawerNavigator.displayName!}
        screenOptions={{ headerShown: false }}
      >
        {[DrawerNavigator].map((ScreenComponent) => (
          <Screen
            key={ScreenComponent.displayName!}
            name={ScreenComponent.displayName!}
            component={ScreenComponent}
          />
        ))}
      </Navigator>
    );
  };

export interface RootNavigatorProps {
  //
}

RootNavigator.defaultProps = {
  //
};

RootNavigator.propTypes = {
  //
};

RootNavigator.displayName = nameof(RootNavigator);

export default RootNavigator;
