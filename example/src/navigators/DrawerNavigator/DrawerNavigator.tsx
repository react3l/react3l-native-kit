import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import './DrawerNavigator.scss';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from 'example/src/screens/HomeScreen/HomeScreen';
import DatePickerScreen from '../../screens/DatePickerScreen/DatePickerScreen';
import TextInputScreen from '../../screens/TextInputScreen/TextInputScreen';
import BottomSheetScreen from '../../screens/BottomSheetScreen/BottomSheetScreen';
import DropdownScreen from '../../screens/DropdownScreen/DropdownScreen';
import ConfirmationScreen from 'example/src/screens/ConfirmationScreen/ConfirmationScreen';

const { Navigator, Screen } = createDrawerNavigator();

/**
 * File: DrawerNavigator.tsx
 * @created 2021-08-10 21:38:07
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<DrawerNavigatorProps>>}
 */
const DrawerNavigator: FC<PropsWithChildren<DrawerNavigatorProps>> =
  (): ReactElement => {
    return (
      <Navigator initialRouteName={HomeScreen.displayName!}>
        {[
          BottomSheetScreen,
          ConfirmationScreen,
          DatePickerScreen,
          DropdownScreen,
          HomeScreen,
          TextInputScreen,
        ].map((ScreenComponent) => (
          <Screen
            key={ScreenComponent.displayName!}
            name={ScreenComponent.displayName!}
            component={ScreenComponent}
          />
        ))}
      </Navigator>
    );
  };

export interface DrawerNavigatorProps {
  //
}

DrawerNavigator.defaultProps = {
  //
};

DrawerNavigator.propTypes = {
  //
};

DrawerNavigator.displayName = nameof(DrawerNavigator);

export default DrawerNavigator;
