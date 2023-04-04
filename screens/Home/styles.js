import styled from 'styled-components/native';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPixel, heightPixel, pixelSizeVertical, pixelSizeHorizontal } from '../../shared/dimensions';

export const ContainerHome = styled.SafeAreaView`
  flex: 1;
`;

export const BackHome = styled(LinearGradient).attrs({
  colors: ['#6D37E0','#241643'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
})`
  flex: 1;
  align-items: center;
`;

export const Logo = styled(Image).attrs({
  resizeMode: 'contain',
})`
  margin: ${pixelSizeVertical(50)}px 0 0 0;
  height: ${heightPixel(300)}px;
  width: ${widthPixel(350)}px;
`;

export const NewGame = styled.Pressable`
  margin: ${pixelSizeVertical(250)}px 0 0 0;
`;

export const BackgroundButton = styled(LinearGradient).attrs({
  colors: ['#F4C51D','#FF7009'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
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