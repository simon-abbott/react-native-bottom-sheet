import React, { memo, useMemo } from 'react';
import BottomSheetBackground from '../bottomSheetBackground';
import type { BottomSheetBackgroundContainerProps } from './types';
import { styles } from './styles';

const BottomSheetBackgroundContainerComponent = ({
  animatedIndex,
  animatedPosition,
  backgroundComponent: _providedBackgroundComponent,
  backgroundStyle: _providedBackgroundStyle,
}: BottomSheetBackgroundContainerProps) => {
  const BackgroundComponent =
    _providedBackgroundComponent || BottomSheetBackground;

  const backgroundStyle = useMemo(
    () => [styles.container, _providedBackgroundStyle],
    [_providedBackgroundStyle]
  );

  return _providedBackgroundComponent === null ? null : (
    <BackgroundComponent
      pointerEvents="none"
      animatedIndex={animatedIndex}
      animatedPosition={animatedPosition}
      style={backgroundStyle}
    />
  );
};

const BottomSheetBackgroundContainer = memo(
  BottomSheetBackgroundContainerComponent
);
BottomSheetBackgroundContainer.displayName = 'BottomSheetBackgroundContainer';

export default BottomSheetBackgroundContainer;
