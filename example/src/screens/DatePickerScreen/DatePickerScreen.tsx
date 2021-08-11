import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import './DatePickerScreen.scss';
import HomeTitle from '../../components/HomeTitle/HomeTitle';
import { DatePicker } from 'react3l-native-kit';
import atomicStyles from 'react-native-atomic-styles/src/index';
import type { Moment } from 'moment';
import { Text } from 'react-native';
import SectionDash from '../../components/SectionDash/SectionDash';

/**
 * File: DatePickerScreen.tsx
 * @created 2021-08-11 16:21:53
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<DatePickerScreenProps>>}
 */
const DatePickerScreen: FC<PropsWithChildren<DatePickerScreenProps>> =
  (): ReactElement => {
    return (
      <>
        <HomeTitle>CalendarPicker</HomeTitle>
        <DatePicker
          textStyle={[atomicStyles.text]}
          extraModalProps={{}}
          onChange={(date: Moment) => {
            console.log(date);
          }}
        >
          <Text style={[atomicStyles.textDark, atomicStyles.text]}>
            Pick date
          </Text>
        </DatePicker>
        <SectionDash />

        <HomeTitle>RangePicker</HomeTitle>
        <DatePicker
          textStyle={[atomicStyles.text]}
          extraModalProps={{}}
          allowRangeSelection={true}
          onChange={(date: Moment, endDate?: Moment) => {
            console.log(date, endDate);
          }}
        >
          <Text style={[atomicStyles.textDark, atomicStyles.text]}>
            Pick date
          </Text>
        </DatePicker>
        <SectionDash />
      </>
    );
  };

export interface DatePickerScreenProps {
  //
}

DatePickerScreen.defaultProps = {
  //
};

DatePickerScreen.propTypes = {
  //
};

DatePickerScreen.displayName = nameof(DatePickerScreen);

export default DatePickerScreen;
