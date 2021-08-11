import type {
  ComponentType,
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import styles from './BottomSheet.scss';
import type { ModalProps } from 'react-native-modal';
import Modal from 'react-native-modal';
import type {
  ScrollViewProps,
  TextProps,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { LinearGradientProps } from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';

/**
 * File: BottomSheet.tsx
 * @created 2021-08-10 23:01:52
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<BottomSheetProps>>}
 */
const BottomSheet: FC<PropsWithChildren<BottomSheetProps>> = (
  props: PropsWithChildren<BottomSheetProps>
): ReactElement => {
  const {
    children,
    headerProps,
    headerGradient,
    scrollViewProps,
    onDismiss,
    style,
    touchComponent,
    safeAreaViewStyle,
    title,
    titleStyle,
    rightIcon,
    onRightIconPress,
    ...restProps
  } = props;

  const titleIsString: boolean = typeof title === 'string';

  const TouchComponent: ComponentType<TouchableOpacityProps> = touchComponent!;

  const HeaderContainer: ComponentType<LinearGradientProps | ViewProps> =
    headerGradient ? require('react-native-linear-gradient').default : View;

  const scrollViewRef = React.createRef<ScrollView>();

  const handleScrollTo: ModalProps['scrollTo'] = React.useCallback(
    (event) => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo(event);
      }
    },
    [scrollViewRef]
  );

  return (
    <Modal
      onBackdropPress={onDismiss}
      onSwipeComplete={onDismiss}
      scrollTo={handleScrollTo}
      style={[styles.container, StyleSheet.flatten(style)]}
      {...restProps}
    >
      <HeaderContainer style={[styles.header]} {...headerProps}>
        <TouchComponent onPress={onDismiss}>
          <Feather name="x" size={24} color="white" />
        </TouchComponent>
        {titleIsString ? (
          <Text style={[styles.title, StyleSheet.flatten(titleStyle)]}>
            {title}
          </Text>
        ) : (
          title
        )}
        {rightIcon ? (
          <TouchComponent onPress={onRightIconPress}>
            {rightIcon}
          </TouchComponent>
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
      </HeaderContainer>
      <SafeAreaView
        style={[styles.contentSafeArea, StyleSheet.flatten(safeAreaViewStyle)]}
      >
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          {...scrollViewProps}
          style={[styles.content, StyleSheet.flatten(scrollViewProps?.style)]}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export interface BottomSheetProps extends Partial<ModalProps> {
  headerGradient?: boolean;

  headerProps?: LinearGradientProps | ViewProps;

  scrollViewProps?: ScrollViewProps;

  touchComponent?: ComponentType<TouchableOpacityProps>;

  safeAreaViewStyle?: SafeAreaViewProps['style'];

  title?: ReactNode;

  titleStyle?: TextProps['style'];

  rightIcon?: ReactElement;

  onRightIconPress?: TouchableOpacityProps['onPress'];
}

const { Pressable, TouchableOpacity } = require('react-native');

BottomSheet.defaultProps = {
  animationIn: 'fadeInUp',
  animationOut: 'fadeOutDown',
  propagateSwipe: true,
  avoidKeyboard: true,
  panResponderThreshold: 4,
  scrollOffset: 10,
  swipeDirection: ['down'],

  headerProps: {},
  scrollViewProps: {},
  touchComponent: Pressable ?? TouchableOpacity,
};

BottomSheet.propTypes = {
  //
};

BottomSheet.displayName = nameof(BottomSheet);

export default BottomSheet;
