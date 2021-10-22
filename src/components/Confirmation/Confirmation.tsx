import atomicStyles from 'example/node_modules/react-native-atomic-styles/src';
import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { LinearGradientProps } from 'react-native-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import type { ModalProps } from 'react-native-modal';
import Modal from 'react-native-modal';
import nameof from 'ts-nameof.macro';
import styles from './Confirmation.scss';

type AtomicStyles = typeof atomicStyles;

const TouchComponent =
  require('react-native').Pressable ?? require('react-native').TouchableOpacity;

const { width } = Dimensions.get('window');

const buttonSize = (width - 80) / 2;

/**
 * File: Confirmation.tsx
 * @created 2020-10-29 16:19:28
 * @author Thanh Tùng <ht@thanhtunguet.info>
 * @type {FC<PropsWithChildren<ConfirmModalProps>>}
 */
const Confirmation: FC<PropsWithChildren<ConfirmationProps>> = (
  props: PropsWithChildren<ConfirmationProps>
): ReactElement => {
  const {
    children,
    isVisible,
    onCancel,

    title,
    titleStyle,
    description,
    descriptionStyle,

    textStyle,

    primaryLoading,
    primaryText,
    primaryTextStyle,
    onPrimaryPress,

    secondaryLoading,
    secondaryText,
    secondaryTextStyle,
    onSecondaryPress,

    gradientProps,
  } = props;

  const atomicStyles: AtomicStyles = props.atomicStyles!;

  const handleBackButton = React.useCallback(() => {
    if (isVisible) {
      onCancel && onCancel();
    }
  }, [isVisible, onCancel]);

  const activityIndicator = <ActivityIndicator style={[atomicStyles.mr2]} />;

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onCancel}
      onBackButtonPress={handleBackButton}
      animationIn="fadeInUp"
      animationOut="fadeOutUp"
      style={[styles.flexRowCenter, styles.modalContainer, atomicStyles.p4]}
    >
      <View style={[styles.modal]}>
        <Text
          style={[
            atomicStyles.h3,
            atomicStyles.textDark,
            styles.title,
            StyleSheet.flatten(titleStyle),
          ]}
        >
          {title}
        </Text>

        <Text
          style={[
            atomicStyles.text,
            atomicStyles.textDark,
            styles.description,
            StyleSheet.flatten(descriptionStyle),
          ]}
        >
          {description}
        </Text>

        {children}

        <View style={[styles.buttons]}>
          <TouchComponent
            style={[styles.button, buttonStyles.button]}
            onPress={onPrimaryPress}
          >
            <LinearGradient
              colors={['#FFFFFF', '#FFFFFF']}
              {...gradientProps}
              style={[styles.gradientContent, styles.buttonPadding]}
            >
              {primaryLoading && activityIndicator}
              <Text
                style={[
                  atomicStyles.bold,
                  atomicStyles.textDark,
                  StyleSheet.flatten(textStyle),
                  StyleSheet.flatten(primaryTextStyle),
                ]}
              >
                {primaryText}
              </Text>
            </LinearGradient>
          </TouchComponent>

          <TouchComponent
            style={[styles.button, styles.buttonPadding, buttonStyles.button]}
            onPress={onSecondaryPress}
          >
            {secondaryLoading && activityIndicator}
            <Text
              style={[
                atomicStyles.bold,
                atomicStyles.textDark,
                StyleSheet.flatten(textStyle),
                StyleSheet.flatten(secondaryTextStyle),
              ]}
            >
              {secondaryText}
            </Text>
          </TouchComponent>
        </View>
      </View>
    </Modal>
  );
};

export interface ConfirmationProps extends Partial<ModalProps> {
  title?: string;
  titleStyle?: StyleProp<TextStyle>;

  description?: string;
  descriptionStyle?: StyleProp<TextStyle>;

  onCancel?(): void | Promise<void>;

  containerStyle?: StyleProp<ViewStyle>;

  textStyle?: StyleProp<TextStyle>;

  primaryText?: string;
  primaryTextStyle?: StyleProp<TextStyle>;
  primaryLoading?: boolean;
  onPrimaryPress?(): void | Promise<void>;

  secondaryText?: string;
  secondaryTextStyle?: StyleProp<TextStyle>;
  secondaryLoading?: boolean;
  onSecondaryPress?(): void | Promise<void>;

  atomicStyles?: AtomicStyles;

  gradientProps?: Partial<LinearGradientProps>;
}

Confirmation.defaultProps = {
  atomicStyles,
  gradientProps: {},
};

Confirmation.propTypes = {
  //
};

Confirmation.displayName = nameof(Confirmation);

export default Confirmation;

const buttonStyles = StyleSheet.create({
  button: {
    width: buttonSize,
  },
});
