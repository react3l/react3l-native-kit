import type { FC, PropsWithChildren, ReactElement, RefObject } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import styles from './Dropdown.scss';
import type { TouchableOpacityProps, ViewProps } from 'react-native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import Modal from 'react-native-modal';

type DropdownComponent<T = any> = FC<PropsWithChildren<DropdownProps<T>>>;

/**
 * File: Dropdown.tsx
 * @created 2021-08-10 22:54:30
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<DropdownProps>>}
 */
const Dropdown: DropdownComponent = function Dropdown<T>(
  props: PropsWithChildren<DropdownProps<T>>
): ReactElement {
  const {
    children,
    data,
    renderItem,
    keyExtractor,
    value,
    onChange,
    caretIcon,
    style,
    modalStyle,
  } = props;

  const pickerRef: RefObject<Picker<string | number>> =
    React.useRef<Picker<string | number>>(null);

  const [isOpened, setIsOpened] = React.useState<boolean>(false);

  const handleToggle = React.useCallback(() => {
    setIsOpened(!isOpened);
  }, [isOpened]);

  const handleClose = React.useCallback(() => {
    setIsOpened(false);
  }, []);

  console.log(value);

  const handleChange = React.useCallback(
    (key: string | number) => {
      const e = data.find(
        (item) => (keyExtractor && keyExtractor(item)) === key
      );
      onChange && e && onChange(e!);
    },
    [data, keyExtractor, onChange]
  );

  return (
    <>
      <TouchableOpacity
        style={[styles.dropdownToggle, StyleSheet.flatten(style)]}
        onPress={handleToggle}
      >
        {children}
        {caretIcon && caretIcon(isOpened)}
      </TouchableOpacity>
      <Modal
        onBackButtonPress={handleClose}
        onBackdropPress={handleClose}
        isVisible={isOpened}
        style={styles.pickerDropdown}
      >
        <View style={[styles.pickerContainer, StyleSheet.flatten(modalStyle)]}>
          <Picker
            ref={pickerRef}
            selectedValue={value && keyExtractor && keyExtractor(value!)}
            onValueChange={handleChange}
          >
            {data.map((item, index) => (
              <Picker.Item
                key={keyExtractor && keyExtractor(item)}
                label={renderItem && renderItem(item, index)}
                value={keyExtractor && keyExtractor(item)}
              />
            ))}
          </Picker>
        </View>
      </Modal>
    </>
  );
};

export interface DropdownProps<T = any> {
  data: T[];

  value?: T;

  onChange?(value: T): void | Promise<void>;

  renderItem?: (item: T, index: number) => string;

  keyExtractor?: (item: T) => string | number;

  caretIcon?: (isOpened: boolean) => ReactElement;

  style?: TouchableOpacityProps['style'];

  modalStyle?: ViewProps['style'];
}

Dropdown.defaultProps = {
  renderItem(item) {
    return `${item}`;
  },
  keyExtractor(item) {
    return item;
  },
  caretIcon(isOpened: boolean) {
    return <Feather name={isOpened ? 'chevron-up' : 'chevron-down'} />;
  },
};

Dropdown.propTypes = {
  //
};

Dropdown.displayName = nameof(Dropdown);

export default Dropdown;
