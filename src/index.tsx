import { requireNativeComponent, ViewStyle } from 'react-native';

type React3lNativeKitProps = {
  color: string;
  style: ViewStyle;
};

export const React3lNativeKitViewManager = requireNativeComponent<React3lNativeKitProps>(
'React3lNativeKitView'
);

export default React3lNativeKitViewManager;
