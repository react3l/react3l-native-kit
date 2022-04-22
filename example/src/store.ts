import { configureStore } from '@reduxjs/toolkit';
import { createThemeSlice } from 'react3l-native-kit';

export const globalSlice = createThemeSlice({
  currentTheme: 'light',
  themes: {
    light: {
      primaryColor: '#007bff',
      secondaryColor: '#6c757d',
      successColor: '#28a745',
      dangerColor: '#dc3545',
      infoColor: '#17a2b8',
      warningColor: '#ffc107',
      lightColor: '#f8f9fa',
      darkColor: '#343a40',
      mutedColor: '#6c757d',
    },
    dark: {
      primaryColor: '#007bff',
      secondaryColor: '#6c757d',
      successColor: '#28a745',
      dangerColor: '#dc3545',
      infoColor: '#17a2b8',
      warningColor: '#ffc107',
      lightColor: '#343a40',
      darkColor: '#f8f9fa',
      mutedColor: '#6c757d',
    },
  },
});

export const store = configureStore({
  reducer: globalSlice.reducer,
});
