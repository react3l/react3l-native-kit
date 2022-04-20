import { createSlice } from '@reduxjs/toolkit';
import type { ThemeSliceState, ThemeStyle, ThemingGlobalState } from './types';
import { transformColors } from './transform-colors';
import { globalStyles } from './global-styles';

export function createThemeSlice<T = {}>(
  initialState: Omit<ThemeSliceState<T>, 'globalStyles'> = {
    themes: {},
    currentTheme: 'default',
  }
) {
  const { themes, currentTheme } = initialState;
  const themeStyle = themes[currentTheme];

  return createSlice({
    name: 'theming',
    initialState: {
      ...initialState,
      globalStyles: transformColors(globalStyles, themeStyle),
    },
    reducers: {
      setThemes(
        state: ThemingGlobalState['theming'],
        action: {
          type: string;
          payload: Record<string, ThemeStyle>;
        }
      ) {
        state.themes = action.payload;
        state.globalStyles = transformColors(
          globalStyles,
          state.themes[state.currentTheme]
        );
      },
      changeTheme(
        state: ThemingGlobalState['theming'],
        action: {
          type: string;
          payload: keyof ThemingGlobalState['theming']['themes'];
        }
      ) {
        const theme = action.payload;
        state.currentTheme = theme;
        state.globalStyles = transformColors(globalStyles, state.themes[theme]);
      },
    },
  });
}
