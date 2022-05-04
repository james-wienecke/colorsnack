import React from 'react';
import CanvasNative from 'react-native-canvas';
import useCanvas from './useCanvas';

const Canvas = props => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);

  return <CanvasNative ref={canvasRef} {...rest} />;
};

export default Canvas;
