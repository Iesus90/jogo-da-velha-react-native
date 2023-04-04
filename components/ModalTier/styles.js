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

export const Tier = styled.Modal`
  flex: 1;
`;

export const ContainerModal = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  border-radius: ${heightPixel(10)}px;
  top: ${heightPixel(200)}px;
  margin: 0 ${pixelSizeHorizontal(15)}px 0 ${pixelSizeHorizontal(15)}px;
  padding: ${pixelSizeVertical(25)}px 0 0 0;
`;

export const BackgroundButton = styled(LinearGradient).attrs({
  colors: ['#F4C51D', '#FF7009'],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
})`
  align-items: center;
  margin: ${pixelSizeVertical(50)}px 0 ${pixelSizeVertical(50)}px 0;
`;

export const RestartGameButton = styled.Pressable``;

export const TextButton = styled(Image).attrs({
  resizeMode: 'contain',
})`
  margin: 0 ${pixelSizeHorizontal(20)}px 0 ${pixelSizeHorizontal(20)}px;
  height: ${heightPixel(100)}px;
  width: ${widthPixel(200)}px;
`;

export const TextTier = styled(Image).attrs({
  resizeMode: 'contain',
})`
  margin: 0 ${pixelSizeHorizontal(20)}px 0 ${pixelSizeHorizontal(20)}px;
  height: ${heightPixel(150)}px;
  width: ${widthPixel(250)}px;
`;
