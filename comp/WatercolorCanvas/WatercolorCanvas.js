import React, { useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { StatusBarHeight } from '../../util';
import Canvas from '../Canvas';
import CanvasControls from '../CanvasControls';

const WatercolorCanvas = () => {
  const windowDims = useWindowDimensions();

  const [brushColor, setBrushColor] = useState('#000000');

  return (
    <View>
      <Canvas
        width={windowDims.width}
        height={windowDims.height - StatusBarHeight - 200}
        brushColor={brushColor}
      />
      <CanvasControls setBrushColor={setBrushColor} />
    </View>
  );
};

export default WatercolorCanvas;
