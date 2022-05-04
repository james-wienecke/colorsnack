import React, { useEffect, useRef, useCallback } from 'react';
import { View, useWindowDimensions } from 'react-native';
import Canvas from '../Canvas';

const WatercolorCanvas = () => {
  const draw = ctx => {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fill();
  };

  const windowDims = useWindowDimensions();

  return (
    <View>
      <Canvas draw={draw} width={windowDims.width} height={windowDims.height} />
    </View>
  );
};

export default WatercolorCanvas;
