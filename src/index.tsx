import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react3l-native-kit' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

abstract class React3lNativeKitModule {}

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
