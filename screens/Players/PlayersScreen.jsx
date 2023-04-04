import React from 'react';
import { useForm, Controller } from "react-hook-form";
import {
  ContainerHome,
  BackColor,
  StartGame,
  BackgroundStartButton,
  TextButton,
  Names,
  ContainerNames,
  Players,
  InputName,
  TextError,
} from './styles';

const PlayersScreen = ({navigation}) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            player1: '',
            player2: ''
        }
    });

    const onSubmit = (data) => {
        navigation.navigate(
            'Game', { player1: data.player1, player2: data.player2 }
        );
    };

    return (
        <ContainerHome>
            <BackColor>
                <ContainerNames>
                    <Names source={require('../../shared/nomesDosJogadores.png')}/>
                </ContainerNames>
                <Players source={require('../../shared/jogador1.png')}/>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputName error={errors.player1} onBlur={onBlur} onChangeText={onChange} value={value}/>
                    )}
                    name="player1"
                />
                {errors.player1 && <TextError>Nome é Obrigatório.</TextError>}
                <Players source={require('../../shared/jogador2.png')}/>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <InputName error={errors.player2} onBlur={onBlur} onChangeText={onChange} value={value}/>
                    )}
                    name="player2"
                />
                {errors.player2 && <TextError>Nome é Obrigatório.</TextError>}
                <ContainerNames>
                    <StartGame onPress={handleSubmit(onSubmit)}>
                    <BackgroundStartButton>
                        <TextButton source={require('../../shared/iniciar.png')}/>
                    </BackgroundStartButton>
                    </StartGame>
                </ContainerNames>
            </BackColor>
        </ContainerHome>
    );
};

export default PlayersScreen;