interface ILogGame {
    logs: string[]
    namePlayerX: string
    scorePlayerX: number
    namePlayerO: string
    scorePlayerO: number
}

const LogGame = ({ logs, namePlayerX, scorePlayerX, namePlayerO, scorePlayerO}: ILogGame) => {

    return (
        <div className='info'>
        <div className='score'>{`${namePlayerX} - X - venceu ${scorePlayerX} vezes`}</div>
        <div className='score'>{`${namePlayerO} - O - venceu ${scorePlayerO} vezes`}</div>
            <div className='containerLog'>
                {
                    logs.map((log, index) => {
                        return (<div key={index} className='logGame'>▶ {log}</div>)
                    })
                }
            </div>
        </div>
    )
}

export default LogGame;