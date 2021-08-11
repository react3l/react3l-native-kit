import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import './SectionDash.scss';
import Dash from 'react-native-dash';
import { StyleSheet } from 'react-native';
import atomicStyles from 'react-native-atomic-styles/src/index';

/**
 * File: SectionDash.tsx
 * @created 2021-08-11 16:22:40
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<SectionDashProps>>}
 */
const SectionDash: FC<PropsWithChildren<SectionDashProps>> =
  (): ReactElement => {
    return (
      <>
        <Dash
          dashGap={0}
          dashLength={1}
          dashThickness={StyleSheet.hairlineWidth}
          dashColor="#E11493"
          style={[atomicStyles.my4]}
        />
      </>
    );
  };

export interface SectionDashProps {
  //
}

SectionDash.defaultProps = {
  //
};

SectionDash.propTypes = {
  //
};

SectionDash.displayName = nameof(SectionDash);

export default SectionDash;
