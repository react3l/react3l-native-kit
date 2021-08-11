import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import './Dropdown.scss';
import { View } from 'react-native';

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
  return <View>{props.children}</View>;
};

export interface DropdownProps<T> {
  data: T[];

  renderItem?: (item: T, index: number) => ReactElement;
}

Dropdown.defaultProps = {
  //
};

Dropdown.propTypes = {
  //
};

Dropdown.displayName = nameof(Dropdown);

export default Dropdown;
