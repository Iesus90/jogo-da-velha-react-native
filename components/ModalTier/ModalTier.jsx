import P from 'prop-types';
import React from 'react';
import {Tier, ContainerModal, BackgroundButton, RestartGameButton, TextButton, TextTier} from './styles';

const ModalTier = ({setCells, modalTierVisible, setModalTierVisible}) => {
  return (
    <Tier
      animationType="slide"
      transparent={true}
      visible={modalTierVisible}
      onRequestClose={() => {
        setModalTierVisible(!modalTierVisible);
      }}>
      <ContainerModal>
        <TextTier source={require('../../shared/empate.png')} />
        <RestartGameButton
          onPress={() => {
            setModalTierVisible(false);
            setCells(Array(9).fill(null));
          }}>
          <BackgroundButton>
            <TextButton source={require('../../shared/reiniciar.png')} />
          </BackgroundButton>
        </RestartGameButton>
      </ContainerModal>
    </Tier>
  );
};

ModalTier.propTypes = {
  setCells: P.func.isRequired,
  modalTierVisible: P.bool.isRequired,
  setModalTierVisible: P.func.isRequired,
};

export default ModalTier;
