import React, { useEffect, useRef, useCallback } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { StatusBarHeight } from '../../util/statusbar';
import Canvas from '../Canvas';

const WatercolorCanvas = () => {
  const draw = ctx => {
    // background
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fill();
    // testing :)
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(100, 100, ctx.canvas.width - 200, ctx.canvas.height - 200);
    ctx.fill();
  };

  const windowDims = useWindowDimensions();

  return (
    <View>
      <Canvas draw={draw} width={windowDims.width} height={windowDims.height - StatusBarHeight} />
    </View>
  );
};

export default WatercolorCanvas;
