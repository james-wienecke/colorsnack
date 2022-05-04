import React from 'react';
import CanvasNative from 'react-native-canvas';
import useCanvas from './useCanvas';

const Canvas = props => {
  const { draw, width, height, ...rest } = props;
  const canvasRef = useCanvas(draw, { width, height });

  return (
    <CanvasNative ref={canvasRef} {...rest} />
  );
};

export default Canvas;
