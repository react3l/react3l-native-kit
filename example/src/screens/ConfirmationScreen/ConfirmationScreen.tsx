import HomeTitle from 'example/src/components/HomeTitle/HomeTitle';
import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import { Button } from 'react-native';
import { Confirmation } from 'react3l-native-kit';
import nameof from 'ts-nameof.macro';

/**
 * File: ConfirmationScreen.tsx
 * @created 2021-10-22 01:05:47
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<ConfirmationScreenProps>>}
 */
const ConfirmationScreen: FC<PropsWithChildren<ConfirmationScreenProps>> = (
  props: PropsWithChildren<ConfirmationScreenProps>
): ReactElement => {
  const [visible, setVisible] = React.useState<boolean>(false);

  const onBackPress = () => setVisible(false);

  return (
    <>
      <HomeTitle>Confirmation</HomeTitle>
      {props.children}
      <Button title="Show confirmation" onPress={() => setVisible(true)} />
      <Confirmation
        isVisible={visible}
        onCancel={onBackPress}
        onPrimaryPress={onBackPress}
        onSecondaryPress={onBackPress}
        title="Are you sure?"
        description="This can not be undone"
        primaryText="OK"
        secondaryText="Cancel"
      />
    </>
  );
};

export interface ConfirmationScreenProps {
  //
}

ConfirmationScreen.defaultProps = {
  //
};

ConfirmationScreen.propTypes = {
  //
};

ConfirmationScreen.displayName = nameof(ConfirmationScreen);

export default ConfirmationScreen;
