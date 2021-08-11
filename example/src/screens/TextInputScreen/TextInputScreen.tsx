import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import styles from './TextInputScreen.scss';
import HomeTitle from '../../components/HomeTitle/HomeTitle';
import { SvgIcon, TextInput } from 'react3l-native-kit';
import SectionDash from '../../components/SectionDash/SectionDash';
import atomicStyles from 'react-native-atomic-styles';

/**
 * File: TextInputScreen.tsx
 * @created 2021-08-11 16:39:05
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<TextInputScreenProps>>}
 */
const TextInputScreen: FC<PropsWithChildren<TextInputScreenProps>> =
  (): ReactElement => {
    return (
      <>
        <HomeTitle>TextInput</HomeTitle>
        <TextInput
          iconStyle={styles.inputIcon}
          leftIcon={<SvgIcon component={require('../../icons/user.svg')} />}
          rightIcon={<SvgIcon component={require('../../icons/pass.svg')} />}
          style={[atomicStyles.text, atomicStyles.mx2]}
          containerStyle={styles.input}
        />
        <SectionDash />
      </>
    );
  };

export interface TextInputScreenProps {
  //
}

TextInputScreen.defaultProps = {
  //
};

TextInputScreen.propTypes = {
  //
};

TextInputScreen.displayName = nameof(TextInputScreen);

export default TextInputScreen;
