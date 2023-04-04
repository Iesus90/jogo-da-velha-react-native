import styled from 'styled-components/native';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/dimensions';

export const ContainerHome = styled.SafeAreaView`
  flex: 1;
`;

export const BackColor = styled(LinearGradient).attrs({
  colors: ['#6D37E0', '#241643'],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
})`
  flex: 1;
`;

export const StartGame = styled.Pressable`
  margin: ${pixelSizeVertical(70)}px 0 0 0;
`;

export const BackgroundStartButton = styled(LinearGradient).attrs({
  colors: ['#F4C51D', '#FF7009'],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
})`
  align-items: center;
`;

export const TextButton = styled(Image).attrs({
  resizeMode: 'contain',
})`
  margin: 0 ${pixelSizeHorizontal(20)}px 0 ${pixelSizeHorizontal(20)}px;
  height: ${heightPixel(100)}px;
  width: ${widthPixel(200)}px;
`;

export const ContainerNames = styled.View`
  align-items: center;
`;

export const Names = styled(Image).attrs({
  resizeMode: 'contain',
})`
  margin: ${pixelSizeVertical(50)}px 0 0 0;
  height: ${heightPixel(150)}px;
  width: ${widthPixel(200)}px;
`;

export const Players = styled(Image).attrs({
  resizeMode: 'contain',
})`
  margin: ${pixelSizeVertical(20)}px 0 0 ${pixelSizeHorizontal(20)}px;
  height: ${heightPixel(100)}px;
  width: ${widthPixel(180)}px;
`;

export const InputName = styled.TextInput`
  background-color: white;
  border: ${props => (props.error ? `3px solid #F4C51D` : ``)};
  margin: 0 ${pixelSizeHorizontal(20)}px 0 ${pixelSizeHorizontal(20)}px;
  font-size: ${fontPixel(30)}px;
  color: black;
`;

export const TextError = styled.Text`
  margin: 0 ${pixelSizeHorizontal(20)}px 0 ${pixelSizeHorizontal(20)}px;
  font-size: ${fontPixel(20)}px;
  font-weight: bold;
  color: #f4c51d;
`;
