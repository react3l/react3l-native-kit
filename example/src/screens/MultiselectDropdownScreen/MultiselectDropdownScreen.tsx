import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import styles from './MultiselectDropdownScreen.scss';
import type { ListRenderItemInfo } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { MultiselectDropdown } from 'react3l-native-kit';
import type { StackScreenProps } from '@react-navigation/stack';

/**
 * File: MultiselectDropdownScreen.tsx
 * @created 2021-08-20 09:39:04
 * @author tientv <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<MultiselectDropdownScreenProps>>}
 */

const list = [
  {
    id: 0,
    name: 'Test1',
  },
  {
    id: 1,
    name: 'Test2',
  },
  {
    id: 2,
    name: 'Test3',
  },
  {
    id: 3,
    name: 'Test4',
  },
  {
    id: 4,
    name: 'Test4',
  },
  {
    id: 5,
    name: 'Test4',
  },
  {
    id: 6,
    name: 'Test4',
  },
  {
    id: 7,
    name: 'Test4',
  },
  {
    id: 8,
    name: 'Test4',
  },
  {
    id: 9,
    name: 'Test4',
  },
];

const MultiselectDropdownScreen: FC<
  PropsWithChildren<MultiselectDropdownScreenProps>
> = (
  props: PropsWithChildren<MultiselectDropdownScreenProps>
): ReactElement => {
  const { navigation } = props;

  const [selected, setSelected] = React.useState<any[]>([]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setSelected([]);
    });

    return function cleanup() {
      unsubscribe();
    };
  }, [navigation]);

  const handleSelected = React.useCallback(
    (item: any) => () => {
      setSelected([...selected, item]);
    },
    [selected]
  );

  return (
    <View style={[styles.container]}>
      <MultiselectDropdown
        selectedData={selected}
        data={list}
        maxHeight={300}
        renderItem={(isSelected) =>
          ({ item, index }: ListRenderItemInfo<any>) => {
            return !isSelected ? (
              <TouchableOpacity
                style={[
                  styles.item,
                  selected.includes(item) && styles.itemActive,
                ]}
                onPress={handleSelected(item)}
                key={index}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ) : (
              <View key={index} style={styles.itemSelectedView}>
                <Text>{item.name}</Text>
              </View>
            );
          }}
      />
    </View>
  );
};

export interface MultiselectDropdownScreenProps extends StackScreenProps<any> {
  //
}

MultiselectDropdownScreen.defaultProps = {
  //
};

MultiselectDropdownScreen.propTypes = {
  //
};

MultiselectDropdownScreen.displayName = nameof(MultiselectDropdownScreen);

export default MultiselectDropdownScreen;
