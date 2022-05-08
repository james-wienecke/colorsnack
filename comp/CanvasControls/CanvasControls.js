import React from 'react';
import { Button, View } from 'react-native';

const CanvasControls = props => {
  const { setBrushColor, ...rest } = props;
  return (
    <View>
      <Button title={'Black'} onPress={() => setBrushColor('#000000')}>
        Black
      </Button>
      <Button title={'Red'} onPress={() => setBrushColor('#FF0000')}>
        Red
      </Button>
      <Button title={'Green'} onPress={() => setBrushColor('#00FF00')}>
        Green
      </Button>
      <Button title={'Blue'} onPress={() => setBrushColor('#0000FF')}>
        Blue
      </Button>
    </View>
  );
};

export default CanvasControls;
