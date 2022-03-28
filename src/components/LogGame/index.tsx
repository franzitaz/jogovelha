interface ILogGame {
    logs: string[]
}

const LogGame = ({ logs }: ILogGame) => {

    return (
        <div className='containerLog'>
            {
                logs.map((log, index) => {
                    return (<div key={index} className='logGame'>▶ {log}</div>)
                })
            }
        </div>
    )
}

export default LogGame;