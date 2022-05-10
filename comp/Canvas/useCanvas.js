import { useRef, useEffect, useState } from 'react';

const useCanvas = (draw, options) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(options.width);
  const [canvasHeight, setCanvasHeight] = useState(options.height);

  // canvas setup
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    contextRef.current = canvas.getContext('2d');
    const initialCanvas = ctx => {
      // background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fill();
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 5;
    };
    initialCanvas(contextRef.current);
  }, []);

  useEffect(() => {
    const render = () => {
      draw(contextRef.current);
    };

    render();
  }, [draw]);

  return canvasRef;
};

export { useCanvas };
