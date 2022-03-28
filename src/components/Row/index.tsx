import Square from "../Square";

interface IRow {
    row: string
    handleChange: any
    valueLine: string[]
}

const Row = ({row, handleChange, valueLine}:IRow) => {

    return (
        <div className="row">
            <Square valueLine={valueLine[0]} row={row} col={'0'} handleChange={handleChange} />
            <Square valueLine={valueLine[1]} row={row} col={'1'} handleChange={handleChange}/>
            <Square valueLine={valueLine[2]} row={row} col={'2'} handleChange={handleChange}/>
        </div>

)
    }

export default Row;
