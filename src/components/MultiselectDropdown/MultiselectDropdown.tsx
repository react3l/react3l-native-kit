import type { FC, PropsWithChildren, ReactElement } from 'react';
import React from 'react';
import nameof from 'ts-nameof.macro';
import styles from './MultiselectDropdown.scss';
import atomicStyles from 'react-native-atomic-styles';
import type {
  LayoutChangeEvent,
  StyleProp,
  LayoutRectangle,
  ListRenderItem,
  ViewStyle,
} from 'react-native';
import { Dimensions, FlatList, Modal, StatusBar, Text } from 'react-native';
import { TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

/**
 * File: MultiselectDropdown.tsx
 * @created 2021-08-20 09:35:21
 * @author tientv <tientv20@fpt.com.vn>
 * @type {FC<PropsWithChildren<MultiselectDropdownProps>>}
 */

type MultiselectDropdownComponent<T = any> = FC<
  PropsWithChildren<MultiselectDropdownProps<T>>
>;

export interface ItemSelected {
  name: string;
}

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const zero = 0;

const maxWidthTitle = 90;

const MultiselectDropdown: MultiselectDropdownComponent =
  function MultiselectDropdown<T>(
    props: PropsWithChildren<MultiselectDropdownProps<T>>
  ): ReactElement {
    const {
      icon,
      textInputStyle,
      renderItem,
      data,
      selectedData,
      renderItemSelected,
      maxHeight,
      style,
      selectedViewStyle,
      title,
    } = props;

    const slideInDown = React.useMemo(() => {
      return {
        from: {
          maxHeight: 0,
        },
        to: {
          maxHeight: maxHeight,
        },
        delay: 0,
      };
    }, [maxHeight]);

    const slideInUp = React.useMemo(() => {
      return {
        from: {
          maxHeight: maxHeight,
        },
        to: {
          maxHeight: 0,
        },
        delay: 0,
      };
    }, [maxHeight]);

    const [dropDown, isDropdown] = React.useState<boolean>(false);

    const [layout, setLayout] = React.useState<LayoutRectangle>();

    const { top } = useSafeAreaInsets();

    const handleGetLayout = React.useCallback((event: LayoutChangeEvent) => {
      setLayout(event.nativeEvent.layout);
    }, []);

    const handleOpenDropdown = React.useCallback(() => {
      isDropdown(true);
    }, []);

    const handleClosetDropdown = React.useCallback(() => {
      isDropdown(false);
    }, []);

    return (
      <>
        <View
          onLayout={handleGetLayout}
          style={[
            styles.containerView,
            atomicStyles.bgWhite,
            atomicStyles.py3,
            atomicStyles.px4,
            style,
          ]}
        >
          <Text
            numberOfLines={1}
            style={[
              atomicStyles.text,
              styles.textValue,
              { maxWidth: maxWidthTitle },
              textInputStyle,
            ]}
          >
            {title}
          </Text>
          <View style={[styles.valueView, atomicStyles.ml4]}>
            <FlatList
              inverted={true}
              keyExtractor={(_item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={selectedData}
              renderItem={renderItemSelected}
              style={{ transform: [{ scaleX: -1 }] }}
            />
            <TouchableOpacity
              onPress={handleOpenDropdown}
              style={[atomicStyles.pl4]}
            >
              {icon && icon(dropDown)}
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          visible={dropDown}
          transparent={true}
          animationType={'none'}
          presentationStyle={'overFullScreen'}
        >
          <Animatable.View
            animation={dropDown ? slideInDown : slideInUp}
            style={[
              {
                top: layout
                  ? layout?.y +
                    layout?.height +
                    StatusBar.currentHeight! +
                    top * 2
                  : zero,
                width: layout ? layout.width : windowWidth,
                left: layout ? (windowWidth - layout.width) / 2 : zero,
              },
            ]}
          >
            <View
              style={[
                atomicStyles.p2,
                atomicStyles.bgWhite,
                styles.dropdownView,
                selectedViewStyle,
              ]}
            >
              <FlatList
                keyExtractor={(_item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
              />
            </View>
          </Animatable.View>
          {dropDown && (
            <TouchableOpacity
              onPress={handleClosetDropdown}
              style={[
                {
                  height: windowHeight,
                },
                styles.backDrop,
              ]}
            />
          )}
        </Modal>
      </>
    );
  };

export interface MultiselectDropdownProps<T = any> {
  leftIcon?: ReactElement;

  icon?: (isOpened: boolean) => ReactElement;

  textInputStyle?: StyleProp<T>;

  renderItem: ListRenderItem<T> | null | undefined;

  renderItemSelected: ListRenderItem<T> | null | undefined;

  data: ReadonlyArray<T> | null | undefined;

  selectedData: T[];

  maxHeight?: number;

  style?: StyleProp<ViewStyle>;

  selectedViewStyle?: StyleProp<ViewStyle>;

  title?: string;
}

MultiselectDropdown.defaultProps = {
  maxHeight: 200,

  icon(dropDown: boolean) {
    return <Feather name={dropDown ? 'chevron-up' : 'chevron-down'} />;
  },
};

MultiselectDropdown.propTypes = {
  //
};

MultiselectDropdown.displayName = nameof(MultiselectDropdown);

export default MultiselectDropdown;
