import type { ComponentType, FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import type {
  TextInputProps as NativeTextInputProps,
  TouchableOpacityProps,
  ViewProps,
} from 'react-native';
import { StyleSheet, TextInput as NativeTextInput, View } from 'react-native';
import nameof from 'ts-nameof.macro';
import styles from './TextInput.scss';

/**
 * File: TextInput.tsx
 * @created 2021-08-10 08:12:42
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<TextInputProps>>}
 */
const TextInput: FC<PropsWithChildren<TextInputProps>> = (
  props: PropsWithChildren<TextInputProps>
): ReactElement => {
  const {
    containerStyle,
    leftIcon,
    onLeftIconPress,
    rightIcon,
    onRightIconPress,
    iconStyle,
    style,
    iconTouchComponent,
    ...restProps
  } = props;

  const TouchComponent: ComponentType<TouchableOpacityProps> =
    iconTouchComponent!;

  return (
    <View style={[styles.container, StyleSheet.flatten(containerStyle)]}>
      {leftIcon && (
        <TouchComponent style={iconStyle} onPress={onLeftIconPress}>
          {leftIcon}
        </TouchComponent>
      )}
      <NativeTextInput
        {...restProps}
        style={[styles.input, StyleSheet.flatten(style)]}
      />
      {rightIcon && (
        <TouchComponent style={iconStyle} onPress={onRightIconPress}>
          {rightIcon}
        </TouchComponent>
      )}
    </View>
  );
};

export interface TextInputProps extends NativeTextInputProps {
  containerStyle?: ViewProps['style'];

  leftIcon?: ReactElement;

  onLeftIconPress?: TouchableOpacityProps['onPress'];

  rightIcon?: ReactElement;

  onRightIconPress?: TouchableOpacityProps['onPress'];

  iconStyle?: ViewProps['style'];

  iconTouchComponent?: ComponentType<TouchableOpacityProps>;
}

const { Pressable, TouchableOpacity } = require('react-native');

TextInput.defaultProps = {
  iconTouchComponent: Pressable ?? TouchableOpacity,
};

TextInput.propTypes = {
  //
};

TextInput.displayName = nameof(TextInput);

export default TextInput;
