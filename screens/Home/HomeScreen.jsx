import React from 'react';
import {
  ContainerHome,
  BackHome,
  Logo,
  NewGame,
  BackgroundButton,
  TextButton
} from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <ContainerHome>
      <BackHome>
        <Logo source={require('../../shared/nomeDoJogo.png')}/>
        <NewGame onPress={() => navigation.navigate( 'Players' )}>
          <BackgroundButton>
            <TextButton source={require('../../shared/novoJogo.png')}/>
          </BackgroundButton>
        </NewGame>
      </BackHome>
    </ContainerHome>
  );
};

export default HomeScreen;