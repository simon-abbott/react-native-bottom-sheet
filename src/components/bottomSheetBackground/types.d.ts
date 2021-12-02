import type { StyleProp, ViewProps, ViewStyle } from 'react-native';
import type Animated from 'react-native-reanimated';
import type { BottomSheetVariables } from '../../types';

export interface BottomSheetBackgroundProps
  extends Pick<ViewProps, 'pointerEvents' | 'style'>,
    BottomSheetVariables {
  style?: StyleProp<Animated.AnimateStyle<Omit<ViewStyle>>>;
}
