import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import styles from './DropdownScreen.scss';
import HomeTitle from '../../components/HomeTitle/HomeTitle';
import { Dropdown } from 'react3l-native-kit';
import { Text, View } from 'react-native';
import { Model } from 'react3l-common';

class Gender extends Model {
  public id?: number;

  public name?: string;
}

const genders: Gender[] = [
  {
    id: 1,
    name: 'Nam',
  },
  {
    id: 2,
    name: 'Nữ',
  },
  {
    id: 3,
    name: 'Khác',
  },
];

/**
 * File: DropdownScreen.tsx
 * @created 2021-08-12 03:07:35
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<DropdownScreenProps>>}
 */
const DropdownScreen: FC<PropsWithChildren<DropdownScreenProps>> =
  (): ReactElement => {
    const [gender, setGender] = React.useState<Gender>();

    return (
      <View style={styles.container}>
        <HomeTitle>DropdownScreen</HomeTitle>

        <Dropdown
          data={genders}
          value={gender}
          onChange={(item: Gender) => {
            console.log(gender);
            setGender(item);
          }}
          renderItem={(item: Gender) => item.name!}
          keyExtractor={(item: Gender) => item.id!}
        >
          <Text>{gender?.name}</Text>
        </Dropdown>
      </View>
    );
  };

export interface DropdownScreenProps {
  //
}

DropdownScreen.defaultProps = {
  //
};

DropdownScreen.propTypes = {
  //
};

DropdownScreen.displayName = nameof(DropdownScreen);

export default DropdownScreen;
