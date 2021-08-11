import type { ComponentType, FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import styles from './DatePicker.scss';
import type { CalendarPickerProps } from 'react-native-calendar-picker';
import CalendarPicker from 'react-native-calendar-picker';
import type { TouchableOpacityProps } from 'react-native';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import type { Moment } from 'moment';
import atomicStyles from 'react-native-atomic-styles';
import type { ModalProps } from 'react-native-modal';
import { ReactNativeModal } from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * File: DatePicker.tsx
 * @created 2021-08-10 16:59:44
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<DatePickerProps>>}
 */
const DatePicker: FC<PropsWithChildren<DatePickerProps>> = (
  props: PropsWithChildren<DatePickerProps>
): ReactElement => {
  const {
    onChange,
    touchComponent,
    children,
    doneText,
    extraModalProps = {},
    allowRangeSelection,
    ...restProps
  } = props;

  const { bottom } = useSafeAreaInsets();

  const TouchComponent: ComponentType<TouchableOpacityProps> = touchComponent!;

  const { width } = useWindowDimensions();

  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const handleOpen = React.useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleClose = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  const [startDate, setStartDate] = React.useState<Moment | undefined>();

  const [endDate, setEndDate] = React.useState<Moment | undefined>();

  const handleDone = React.useCallback(() => {
    setIsVisible(false);
    if (typeof onChange === 'function') {
      if (allowRangeSelection) {
        if (startDate && endDate) {
          onChange(startDate!, endDate!);
        }
      } else {
        if (startDate) {
          onChange(startDate!);
        }
      }
    }
  }, [allowRangeSelection, startDate, endDate, onChange]);

  return (
    <>
      <ReactNativeModal
        {...extraModalProps}
        isVisible={isVisible}
        style={[styles.modal]}
        onBackdropPress={handleClose}
        onBackButtonPress={handleClose}
      >
        <View
          style={[
            styles.calendarContainer,
            {
              bottom,
            },
          ]}
        >
          <CalendarPicker
            onDateChange={(date, type) => {
              switch (type) {
                case 'END_DATE':
                  setEndDate(date);
                  break;

                case 'START_DATE':
                  setStartDate(date);
                  break;
              }
            }}
            width={width - 16}
            allowRangeSelection={allowRangeSelection}
            {...restProps}
          />
          <TouchComponent style={styles.done} onPress={handleDone}>
            <Text
              style={[
                styles.textDone,
                atomicStyles.bold,
                atomicStyles.textWhite,
              ]}
            >
              {doneText}
            </Text>
          </TouchComponent>
        </View>
      </ReactNativeModal>
      <TouchComponent onPress={handleOpen}>{children}</TouchComponent>
    </>
  );
};

export type RangeDateChangeCallback = (
  startDate: Moment,
  endDate?: Moment
) => void | Promise<void>;

export type DateChangeCallback = (selectedDate: Moment) => void | Promise<void>;

export interface DatePickerProps
  extends Omit<
    CalendarPickerProps,
    'onDateChange' | 'onMonthChange' | 'enableDateChange'
  > {
  onChange?: RangeDateChangeCallback | DateChangeCallback;

  extraModalProps?: Partial<Omit<ModalProps, 'children' | 'isVisible'>>;

  touchComponent?: ComponentType<TouchableOpacityProps>;

  doneText?: string;

  doneButton?: ReactElement;
}

const { Pressable, TouchableOpacity } = require('react-native');

DatePicker.defaultProps = {
  previousTitle: '<<',
  nextTitle: '>>',
  selectMonthTitle: 'Chọn tháng ',
  selectYearTitle: 'Chọn năm',
  weekdays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  months: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  // selectedDayStyle: styles.selectedDay,
  // selectedRangeStyle: styles.selectedDay,
  selectedDayTextStyle: atomicStyles.textWhite,
  todayTextStyle: atomicStyles.textWhite,
  todayBackgroundColor: '#5D5FEF',
  customDatesStyles(date: Moment) {
    const isSunday: boolean = date.weekday() === 0;
    return StyleSheet.create({
      containerStyle: styles.dateContainerStyle,
      textStyle: isSunday ? styles.sunday : styles.day,
      style: styles.dateStyle,
    });
  },
  doneText: 'Xong',
  touchComponent: Pressable ?? TouchableOpacity,
};

DatePicker.propTypes = {
  //
};

DatePicker.displayName = nameof(DatePicker);

export default DatePicker;
