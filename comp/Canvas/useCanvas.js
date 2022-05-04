import { useRef, useEffect } from 'react';

const useCanvas = (draw, options) => {
  const canvasRef = useRef(null);
  const { width, height } = options;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    const render = () => {
      draw(context);
    };

    render();
  }, [draw]);

  return canvasRef;
};

export default useCanvas;
