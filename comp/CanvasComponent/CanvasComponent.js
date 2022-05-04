import React, { useEffect, useRef } from 'react';
import Canvas from 'react-native-canvas';

const CanvasComponent = props => {
  const canvasRef = useRef(null);
  const { draw, ...rest } = props;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const render = () => {
      draw(context);
    };

    render();
  }, [draw]);

  return <Canvas ref={canvasRef} {...rest} />;
};

export default CanvasComponent;
