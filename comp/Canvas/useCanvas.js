import { useRef, useEffect } from 'react';

const useCanvas = (draw, options) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = options.width;
    canvas.height = options.height;

    const render = () => {
      draw(context);
    };

    render();
  }, [draw, options]);

  return canvasRef;
};

export default useCanvas;
