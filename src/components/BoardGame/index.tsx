import { useEffect, useState } from "react";
import Row from '../Row';
import Modal from "../Modal";
import LogGame from "../LogGame";
import StartGame from "../StartGame";

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
    const [log, setLog] = useState<string[]>([]);
    const [modalStartGame, setModalStartGame] = useState(true);
    const [namePlayerX, setNamePlayerX] = useState('');
    const [namePlayerO, setNamePlayerO] = useState('');
    const [scorePlayerX, setScorePlayerX] = useState(0);
    const [scorePlayerO, setScorePlayerO] = useState(0);

    useEffect(() => {

        if (checkWon()) {


            if (player === 'X' ) {
                setScorePlayerX(scorePlayerX + 1);
                setModalTitle(`Player ${namePlayerX} ganhou!`);

                setLog([...log, `Player "${namePlayerX}" ganhou!`]);
            } else {
                setScorePlayerO(scorePlayerO + 1);
                setModalTitle(`Player ${namePlayerO} ganhou!`);

                setLog([...log, `Player ${namePlayerO} ganhou!`]);
            }

            setModalText('Parabéns!');
            setShowModal(true);
        } else if (checkDraw()) {
            setModalTitle('Empatou');
            setModalText('Vocês empataram, começe um novo jogo!');

            setLog([...log, `Vocês empataram, começe um novo jogo!`]);

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

        setLog([...log, `${player === 'X' ? namePlayerX : namePlayerO} que é ${player === 'X' ? 'X' : 'O'}: clicou na linha ${Number(row) + 1}, coluna ${Number(col) + 1}`]);
        
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

    const dismissModalStartGame = () => {
        setModalStartGame(false);
    }

    const cleanLog = () => {
        setLog([]);
    }

    const resetGame = () => {
        setGameState([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]);
        setPlayer('');

        cleanLog();
    }

    const changeCursorPlayer = () => {
        let classStyle = `bodyArea\n`;

        if (player === 'X') {
            classStyle = classStyle + 'playerX';
        } else {
            classStyle = classStyle + 'playerO';
        }

        return classStyle;
    };

    return (
        <>
            <StartGame show={modalStartGame}
            dismissModalStartGame={dismissModalStartGame}
            setPlayerX={setNamePlayerX} setPlayerO={setNamePlayerO}/>

            <div className={changeCursorPlayer()}>
                <div className='ticTacToe'>
                    <Row valueLine={gameState[0]} row={'0'} handleChange={handleChange} />
                    <Row valueLine={gameState[1]} row={'1'} handleChange={handleChange} />
                    <Row valueLine={gameState[2]} row={'2'} handleChange={handleChange} />
                </div>

                <LogGame namePlayerX={namePlayerX} scorePlayerX={scorePlayerX} namePlayerO={namePlayerO} scorePlayerO={scorePlayerO} logs={log} />

                <Modal modalTitle={modalTitle} modalText={modalText} show={showModal} dismissModal={dismissModal} />
            </div>
        </>
    )
}

export default BoardGame;