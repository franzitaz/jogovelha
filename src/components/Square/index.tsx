interface ISquare {
    col: string
    row: string
    handleChange: any
    valueLine: any
}

const Square = ({ col, row, handleChange, valueLine }: ISquare) => {

 
    const handleClick = () => {

        if (valueLine === '') {

            handleChange(row, col);
        }

    }

    return (
        <span onClick={handleClick} className="square">{valueLine}</span>
    )
}

export default Square;
