import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import './BottomSheetScreen.scss';
import { BottomSheet } from 'react3l-native-kit';
import { Button, Text } from 'react-native';
import atomicStyles from 'react-native-atomic-styles';
import Feather from 'react-native-vector-icons/Feather';

/**
 * File: BottomSheetScreen.tsx
 * @created 2021-08-11 23:55:50
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<BottomSheetScreenProps>>}
 */
const BottomSheetScreen: FC<PropsWithChildren<BottomSheetScreenProps>> =
  (): ReactElement => {
    const [visible, setVisible] = React.useState<boolean>(false);

    const onBackPress = () => setVisible(false);

    return (
      <>
        <Button title="Show modal" onPress={() => setVisible(true)} />
        <BottomSheet
          isVisible={visible}
          title="BottomSheet"
          onBackButtonPress={onBackPress}
          onBackdropPress={onBackPress}
          headerGradient={true}
          headerProps={{
            colors: ['#3F15EA', '#352E70'],
            locations: [0, 1],
            start: { x: 0, y: 0 },
            end: { x: 0, y: 1 },
            useAngle: true,
            angle: 180,
          }}
          onDismiss={() => {
            setVisible(false);
          }}
          scrollViewProps={{
            contentContainerStyle: [atomicStyles.p2],
          }}
          rightIcon={<Feather name="x" size={24} color="white" />}
        >
          <Text style={[atomicStyles.text]}>
            Content inside bottom sheet is scrollable
          </Text>
        </BottomSheet>
      </>
    );
  };

export interface BottomSheetScreenProps {
  //
}

BottomSheetScreen.defaultProps = {
  //
};

BottomSheetScreen.propTypes = {
  //
};

BottomSheetScreen.displayName = nameof(BottomSheetScreen);

export default BottomSheetScreen;
