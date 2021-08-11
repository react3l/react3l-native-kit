import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import atomicStyles from 'react-native-atomic-styles/src/index';
import { TextGradient } from 'react3l-native-kit';

/**
 * File: HomeTitle.tsx
 * @created 2021-08-11 08:18:22
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<HomeTitleProps>>}
 */
const HomeTitle: FC<PropsWithChildren<HomeTitleProps>> = (
  props: PropsWithChildren<HomeTitleProps>
): ReactElement => {
  const { children } = props;

  return (
    <TextGradient
      colors={['#FF0000', '#0000FF']}
      style={[atomicStyles.h1]}
      locations={[0, 1]}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
    >
      {children}
    </TextGradient>
  );
};

export interface HomeTitleProps {
  //
}

HomeTitle.defaultProps = {
  //
};

HomeTitle.propTypes = {
  //
};

HomeTitle.displayName = nameof(HomeTitle);

export default HomeTitle;
