import React, { useEffect, useRef, useCallback } from 'react';
import { Text, View } from 'react-native';
import Canvas from 'react-native-canvas';

const WatercolorCanvas = () => {
  const canvasRef = useRef(null);

  const draw = ctx => {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    draw(context);
  }, [draw]);

  return (
    <View>
      <Text>Canvas</Text>
      <Canvas ref={canvasRef} />
    </View>
  );
};

export default WatercolorCanvas;
