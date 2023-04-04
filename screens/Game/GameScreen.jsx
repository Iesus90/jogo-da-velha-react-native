import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
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
  ModalWinner,
  ContainerModal,
  TitleModal,
  TitleWinner,
  BackgroundButton,
  RestartGameButton,
  TextButton,
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
    checkWinnerOrTie();
    if (checkWinnerOrTie() !== null || checkWinnerOrTie() !== 'tier') {
      if (checkWinnerOrTie() === 'X') {
        setScoreX(scoreX + 1);
        setModalWinnerVisible(true);
      } else if (checkWinnerOrTie() === 'O') {
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

  const checkWinnerOrTie = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }

    if (cells.every(cell => cell !== null)) {
      return 'tie';
    }

    return null;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ModalWinner
        animationType="slide"
        transparent={true}
        visible={modalWinnerVisible}
        onRequestClose={() => {
          setModalWinnerVisible(!modalWinnerVisible);
        }}>
        <ContainerModal>
          {checkWinnerOrTie() === 'X' ? (
            <PlayerIcon
              sizeHeight={100}
              source={require('../../shared/X.png')}
            />
          ) : (
            <PlayerIcon
              sizeHeight={100}
              source={require('../../shared/O.png')}
            />
          )}
          <TitleModal>
            {checkWinnerOrTie() === 'X' ? player1 : player2}
          </TitleModal>
          <TitleWinner>Venceu !!</TitleWinner>
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
      </ModalWinner>
      <ModalWinner
        animationType="slide"
        transparent={true}
        visible={modalTierVisible}
        onRequestClose={() => {
          setModalTierVisible(!modalTierVisible);
        }}>
        <ContainerModal>
          <TitleWinner>Deu Empate !!</TitleWinner>
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
      </ModalWinner>
      <BackGame>
        <ContainerScoreboard>
          <Scoreboard>
            <ContainerName>
              <Score>{scoreX}</Score>
              <Title>{player1}</Title>
              <PlayerIcon
                sizeHeight={50}
                source={require('../../shared/X.png')}
              />
            </ContainerName>
          </Scoreboard>
          <Scoreboard>
            <ContainerName>
              <Score>{scoreO}</Score>
              <Title>{player2}</Title>
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
                disabled={checkWinnerOrTie() !== null}
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
