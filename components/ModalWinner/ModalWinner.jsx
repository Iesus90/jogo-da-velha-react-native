import P from 'prop-types';
import React from 'react';
import {checkWinnerOrTie} from '../../utils/checkWinnerOrTie';
import {
  Winner,
  ContainerModal,
  PlayerIcon,
  TitleModal,
  BackgroundButton,
  RestartGameButton,
  TextButton,
  TextWinner,
} from './styles';

const ModalWinner = ({player1, player2, cells, setCells, modalWinnerVisible, setModalWinnerVisible}) => {
  return (
    <Winner
      animationType="slide"
      transparent={true}
      visible={modalWinnerVisible}
      onRequestClose={() => {
        setModalWinnerVisible(!modalWinnerVisible);
      }}>
      <ContainerModal>
        {checkWinnerOrTie(cells) === 'X' ? (
          <PlayerIcon sizeHeight={100} source={require('../../shared/X.png')} />
        ) : (
          <PlayerIcon sizeHeight={100} source={require('../../shared/O.png')} />
        )}
        <TitleModal>{checkWinnerOrTie(cells) === 'X' ? player1 : player2}</TitleModal>
        <TextWinner source={require('../../shared/venceu.png')} />
        <RestartGameButton
          onPress={() => {
            setModalWinnerVisible(false);
            setCells(Array(9).fill(null));
          }}>
          <BackgroundButton>
            <TextButton source={require('../../shared/reiniciar.png')} />
          </BackgroundButton>
        </RestartGameButton>
      </ContainerModal>
    </Winner>
  );
};

ModalWinner.propTypes = {
  player1: P.string.isRequired,
  player2: P.string.isRequired,
  cells: P.array.isRequired,
  setCells: P.func.isRequired,
  modalWinnerVisible: P.bool.isRequired,
  setModalWinnerVisible: P.func.isRequired,
};

export default ModalWinner;
