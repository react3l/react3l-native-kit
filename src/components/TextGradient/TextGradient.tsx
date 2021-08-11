import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import { Text } from 'react-native';
import type { LinearTextGradientProps } from 'react-native-text-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';

/**
 * File: TextGradient.tsx
 * @created 2021-08-10 16:56:41
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<TextGradientProps>>}
 */
const TextGradient: FC<PropsWithChildren<TextGradientProps>> = (
  props: PropsWithChildren<TextGradientProps>
): ReactElement => {
  const { children, style, ...restProps } = props;

  return (
    <LinearTextGradient {...restProps} style={style}>
      <Text style={style}>{children}</Text>
    </LinearTextGradient>
  );
};

export interface TextGradientProps extends LinearTextGradientProps {
  //
}

TextGradient.defaultProps = {
  //
};

TextGradient.propTypes = {
  //
};

TextGradient.displayName = nameof(TextGradient);

export default TextGradient;
