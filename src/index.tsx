import { useStyle, useThemes, useThemeValue } from './redux-theming';
import { NativeModules, Platform } from 'react-native';
import { createThemeSlice, useGlobalStyles } from './redux-theming';

const LINKING_ERROR =
  `The package 'react3l-native-kit' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

abstract class React3lNativeKitModule {
  /**
   * Keep phone screen awake
   */
  public abstract activateKeepAwake(): void;

  /**
   * Disable screen-awake
   */
  public abstract deactivateKeepAwake(): void;

  /**
   * Show splash screen
   *
   * (iOS only)
   */
  public showSplashScreen(): void {
    if (Platform.OS === 'android' && __DEV__) {
      console.warn(
        'Android splash screen should be implemented the right way. See [https://github.com/thanhtunguet/Android-splash-screen-the-right-way](https://github.com/thanhtunguet/Android-splash-screen-the-right-way)'
      );
    }
  }

  /**
   * Hide splash screen
   *
   * (iOS only)
   */
  public hideSplashScreen(): void {
    if (Platform.OS === 'android' && __DEV__) {
      console.warn(
        'Android splash screen should be implemented the right way. See [https://github.com/thanhtunguet/Android-splash-screen-the-right-way](https://github.com/thanhtunguet/Android-splash-screen-the-right-way)'
      );
    }
  }

  /**
   * Redux theming hooks and functions
   */
  public readonly createThemeSlice = createThemeSlice;
  public readonly useThemeValue = useThemeValue;
  public readonly useThemes = useThemes;
  public readonly useGlobalStyles = useGlobalStyles;
  public readonly useStyle = useStyle;
}

const React3lNativeKit: React3lNativeKitModule = NativeModules.React3lNativeKit
  ? NativeModules.React3lNativeKit
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

Object.setPrototypeOf(React3lNativeKit, React3lNativeKitModule.prototype);

export default React3lNativeKit;

export { atomicStyles } from './atomic-styles';

export * from './redux-theming/selectors';
