import { useEffect, useState } from "react";
import Row from '../Row';
import Modal from "../Modal";

const BoardGame = () => {

    const [gameState, setGameState] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]);

    const [player, setPlayer] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    useEffect(() => {

        if (checkWon()) {
            setModalTitle(`Jogador "${player}" ganhou!`)
            setModalText('Parabéns!');
            setShowModal(true);
        } else {
            if (player === 'X') {
                setPlayer('O');
            } else {
                setPlayer('X');
            }
        }


    }, [gameState])

    const handleChange = (row: number, col: number) => {
        const currentGame = gameState;

        currentGame[row][col] = player;

        setGameState([...currentGame]);

    }

    const checkSquareValue = (square: string, square2: string) => {
        if (square.length === 0 || square2.length === 0) {
            return false;
        } else {
            if (square === square2) {
                return true;
            } else {
                return false;
            }
        }
    }

    const checkWon = () => {
        for (let i = 0; i < gameState.length; i++) {

            if (checkSquareValue(gameState[i][0], gameState[i][1]) != false && checkSquareValue(gameState[i][1], gameState[i][2]) != false) {
                return true;
            }
        }
        for (let i = 0; i < gameState.length; i++) {
            if (checkSquareValue(gameState[0][i], gameState[1][i]) != false && checkSquareValue(gameState[1][i], gameState[2][i]) != false) {
                return true;

            }
        }
        if (gameState[0][0] === gameState[1][1] && gameState[1][1] === gameState[2][2]) {
            return gameState[0][0];
        }
        if (gameState[0][2] === gameState[1][1] && gameState[1][1] === gameState[2][0]) {
            return gameState[0][2];
        }

        if (checkDraw()) {
            setModalTitle('Empatou');
            setModalText('Vocês empataram, começe um novo jogo!');
            setShowModal(true);
        }
        return false;
    }


    const checkDraw = () => {
        let result = true;

        for (let i = 0; i < gameState.length; i++) {
            for (let j = 0; j < gameState[i].length; j++) {
                if (gameState[i][j] == '') {
                    result = false;
                    break;
                }

            }
            if (!result) {
                break;
            }
        }
        return result;
    }

    const dismissModal = () => {
        setShowModal(false);
        resetGame();
    }

    const resetGame = () => {
        setGameState([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]);
        setPlayer('');
    }
      
    const changeCursorPlayer = () => {
        let classStyle=`ticTacToe\n`;

        if (player === 'X') {
            classStyle = classStyle + 'playerX';
        } else {
            classStyle = classStyle + 'playerO';
        }

        return classStyle;
      };

    return (
        <div className={changeCursorPlayer()}>
            <Row valueLine={gameState[0]} row={'0'} handleChange={handleChange} />
            <Row valueLine={gameState[1]} row={'1'} handleChange={handleChange} />
            <Row valueLine={gameState[2]} row={'2'} handleChange={handleChange} />
            <Modal modalTitle={modalTitle} modalText={modalText} player={player} show={showModal} dismissModal={dismissModal} />
        </div>
    )
}

export default BoardGame;