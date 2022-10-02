import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react3l-native-kit' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type React3lNativeKitProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'React3lNativeKitView';

export const React3lNativeKitView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<React3lNativeKitProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
