import React, { useEffect, useRef, useCallback } from 'react';
import { Text, View } from 'react-native';
import CanvasComponent from '../CanvasComponent';

const WatercolorCanvas = () => {
  const draw = ctx => {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fill();
  };

  return (
    <View>
      <Text>Canvas</Text>
      <CanvasComponent draw={draw} />
    </View>
  );
};

export default WatercolorCanvas;
