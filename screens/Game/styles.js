import styled from 'styled-components/native';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../shared/dimensions';

export const ContainerScoreboard = styled.View`
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const Scoreboard = styled.View`
  align-items: center;
  background-color: #241445;
  margin: ${pixelSizeVertical(30)}px 0 0 0;
  height: ${heightPixel(200)}px;
  width: ${widthPixel(180)}px;
`;

export const ContainerName = styled.View`
  align-items: center;
`;

export const Score = styled.Text`
  font-size: ${fontPixel(70)}px;
  font-weight: bold;
  color: #ffff;
`;

export const Title = styled.Text`
  font-size: ${fontPixel(30)}px;
  font-weight: 500;
  color: white;
`;

export const PlayerIcon = styled(Image).attrs({
  resizeMode: 'contain',
})`
  height: ${props =>
    props.sizeHeight ? heightPixel(props.sizeHeight) : heightPixel(0)}px;
`;

export const ContainerGame = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackGame = styled(LinearGradient).attrs({
  colors: ['#6D37E0', '#241643'],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
})`
  flex: 1;
`;

export const ContainerGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  border-color: black;
  margin: 0 ${pixelSizeHorizontal(15)}px 0 ${pixelSizeHorizontal(15)}px;
`;

export const Grid = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 33.33%;
  aspect-ratio: 1;
  border-width: ${heightPixel(15)}px;
  border-color: #241445;
  color: #6d37e0;
`;

export const ModalWinner = styled.Modal`
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

export const TitleModal = styled.Text`
  font-size: ${fontPixel(50)}px;
  font-weight: bold;
  color: #000;
`;

export const TitleWinner = styled.Text`
  font-size: ${fontPixel(50)}px;
  font-weight: bold;
  color: #000;
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

export const TextWinner = styled(Image).attrs({
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
