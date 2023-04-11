import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {checkWinnerOrTie} from '../../utils/checkWinnerOrTie';
import ModalWinner from '../../components/ModalWinner/ModalWinner';
import ModalTier from '../../components/ModalTier/ModalTier';
import {
  ContainerScoreboard,
  BackGame,
  Scoreboard,
  ContainerName,
  Score,
  Title,
  PlayerIcon,
  ContainerGame,
  ContainerGrid,
  Grid,
} from './styles';

const GameScreen = ({route}) => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [modalWinnerVisible, setModalWinnerVisible] = useState(false);
  const [modalTierVisible, setModalTierVisible] = useState(false);
  const {player1, player2} = route.params;

  useEffect(() => {
    checkWinnerOrTie(cells);
    if (
      checkWinnerOrTie(cells) !== null ||
      checkWinnerOrTie(cells) !== 'tier'
    ) {
      if (checkWinnerOrTie(cells) === 'X') {
        setScoreX(scoreX + 1);
        setModalWinnerVisible(true);
      } else if (checkWinnerOrTie(cells) === 'O') {
        setScoreO(scoreO + 1);
        setModalWinnerVisible(true);
      }
    }
    if (cells.every(cell => cell !== null)) {
      setModalTierVisible(true);
    }
  }, [cells]);

  const handleCellPress = index => {
    if (cells[index]) {
      return;
    }
    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ModalWinner
        player1={player1}
        player2={player2}
        cells={cells}
        setCells={setCells}
        modalWinnerVisible={modalWinnerVisible}
        setModalWinnerVisible={setModalWinnerVisible}
      />
      <ModalTier
        setCells={setCells}
        modalTierVisible={modalTierVisible}
        setModalTierVisible={setModalTierVisible}
      />
      <BackGame>
        <ContainerScoreboard>
          <Scoreboard>
            <ContainerName>
              <Score>{scoreX}</Score>
              <Title numberOfLines={1}>{player1}</Title>
              <PlayerIcon
                sizeHeight={50}
                source={require('../../shared/X.png')}
              />
            </ContainerName>
          </Scoreboard>
          <Scoreboard>
            <ContainerName>
              <Score>{scoreO}</Score>
              <Title numberOfLines={1}>{player2}</Title>
              <PlayerIcon
                sizeHeight={50}
                source={require('../../shared/O.png')}
              />
            </ContainerName>
          </Scoreboard>
        </ContainerScoreboard>
        <ContainerGame>
          <ContainerGrid>
            {cells.map((player, index) => (
              <Grid
                key={index}
                onPress={() => handleCellPress(index)}
                disabled={checkWinnerOrTie(cells) !== null}
                player={player}
                winner={winner && winner.includes(index)}>
                {cells[index] !== null ? (
                  <PlayerIcon
                    sizeHeight={70}
                    source={
                      cells[index] === 'X'
                        ? require('../../shared/X.png')
                        : require('../../shared/O.png')
                    }
                  />
                ) : null}
              </Grid>
            ))}
          </ContainerGrid>
        </ContainerGame>
      </BackGame>
    </SafeAreaView>
  );
};

export default GameScreen;
