import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import type { StatusBarStyle } from 'react-native';
import { StatusBar } from 'react-native';

/**
 * Set status bar style on navigation focus
 *
 * @param barStyle {StatusBarStyle} - status bar style
 */
export function useStatusBarStyle(barStyle: StatusBarStyle): void {
  useFocusEffect(
    React.useCallback(() => {
      if (barStyle) {
        StatusBar.setBarStyle(barStyle!);
      }
    }, [barStyle])
  );
}
