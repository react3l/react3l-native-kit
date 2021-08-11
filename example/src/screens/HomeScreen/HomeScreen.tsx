import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import { SafeAreaView, ScrollView, View } from 'react-native';
import atomicStyles from 'react-native-atomic-styles';
import { SvgIcon, useStatusBarStyle } from 'react3l-native-kit';
import HomeTitle from '../../components/HomeTitle/HomeTitle';
import SectionDash from '../../components/SectionDash/SectionDash';

/**
 * File: HomeScreen.tsx
 * @created 2021-08-10 21:39:25
 * @author thanhtunguet <thanhtung.uet@gmail.com>
 * @type {FC<PropsWithChildren<HomeScreenProps>>}
 */
const HomeScreen: FC<PropsWithChildren<HomeScreenProps>> = (): ReactElement => {
  useStatusBarStyle('dark-content');

  return (
    <SafeAreaView style={[atomicStyles.flex, atomicStyles.w100]}>
      <ScrollView
        style={[atomicStyles.flex, atomicStyles.w100]}
        contentContainerStyle={[atomicStyles.p2]}
      >
        <View>
          <HomeTitle>TextGradient</HomeTitle>
          <SectionDash />
        </View>

        <View>
          <HomeTitle>SvgIcon</HomeTitle>
          <SvgIcon
            component={require('../../icons/user.svg')}
            fill="#FF00FF"
            solid={true}
          />
          <SectionDash />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export interface HomeScreenProps {
  //
}

HomeScreen.defaultProps = {
  //
};

HomeScreen.propTypes = {
  //
};

HomeScreen.displayName = nameof(HomeScreen);

export default HomeScreen;
