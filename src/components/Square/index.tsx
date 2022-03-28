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

    const changeColorPlayer = () => {
        let classStyle = `square\n`;

        if (valueLine === 'X') {
            classStyle = classStyle + 'squareX';
        } else {
            classStyle = classStyle + 'squareO';
        }

        return classStyle;
    };

    return (
        <span onClick={handleClick} className={changeColorPlayer()}>{valueLine}</span>
    )
}

export default Square;
