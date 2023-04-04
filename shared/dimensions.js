import { Dimensions, PixelRatio } from 'react-native';

const { 
    width: SCREEN_WIDTH, 
    height: SCREEN_HEIGHT 
} = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

function normalize(size, based = 'width') {
    const newSize = (based === 'height') ? 
                    size * heightBaseScale : size * widthBaseScale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const widthPixel = (size) => {
    return normalize(size, 'width');
};

export const heightPixel = (size) => {
    return normalize(size, 'height');
};

export const fontPixel = (size) => {
    return heightPixel(size);
};

export const pixelSizeVertical = (size) => {
    return heightPixel(size);
};

export const pixelSizeHorizontal = (size) => {
    return widthPixel(size);
};

