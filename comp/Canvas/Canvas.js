import React, { useState } from 'react';
import { PanResponder, Text, View, Alert } from 'react-native';
import CanvasNative from 'react-native-canvas';
import { useCanvas } from './useCanvas';

const Canvas = props => {
  const { width, height, brushColor, ...rest } = props;
  const [draw, setDraw] = useState(() => () => null);
  const [pos, setPos] = useState({ x: null, y: null });

  const updatePos = ({ locationX, locationY }) =>
    setPos({ x: locationX, y: locationY });
  // const [posX, setPosX] = useState(null);
  // const [posY, setPosY] = useState(null);
  // start, stop, and continue drawing
  const startDraw = ({ nativeEvent }) => {
    // const { locationX, locationY } = nativeEvent;
    // setPos({ x: locationX, y: locationY });
    updatePos(nativeEvent);
    setDraw(() => ctx => {
      ctx.strokeStyle = brushColor;
      ctx.beginPath();
      ctx.moveTo(nativeEvent.locationX, nativeEvent.locationY);
    });
  };

  const stopDraw = ({ nativeEvent }) => {
    updatePos(nativeEvent);
    setDraw(() => ctx => {
      ctx.closePath();
    });
  };

  const contDraw = ({ nativeEvent }) => {
    updatePos(nativeEvent);
    setDraw(() => ctx => {
      ctx.lineTo(nativeEvent.locationX, nativeEvent.locationY);
      ctx.stroke();
    });
  };

  // panResponder initialization
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (event, gestureState) => true,
    onStartShouldSetPanResponderCapture: (event, gestureState) => true,
    onMoveShouldSetPanResponder: (event, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (event, gestureState) => false,
    onPanResponderGrant: (event, gestureState) => startDraw(event),
    onPanResponderMove: (event, gestureState) => contDraw(event),
    onPanResponderRelease: (event, gestureState) => stopDraw(event),
  });

  // canvas initialization
  const canvasRef = useCanvas(draw, { width, height });

  return (
    <View {...panResponder.panHandlers}>
      {/*<Text>*/}
      {/*  X: {pos.x} Y: {pos.y}*/}
      {/*</Text>*/}
      <CanvasNative ref={canvasRef} {...rest} />
    </View>
  );
};

export default Canvas;
