import React from 'react';
import { useWindowDimensions } from 'react-native';
import { StatusBarHeight } from '../../util';
import Canvas from '../Canvas';

const WatercolorCanvas = () => {
  const windowDims = useWindowDimensions();

  return (
    <Canvas
      width={windowDims.width}
      height={windowDims.height - StatusBarHeight}
    />
  );
};

export default WatercolorCanvas;
