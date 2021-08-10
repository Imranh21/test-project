import { styled } from '@material-ui/system';
import { Typography } from '@material-ui/core';


const TableContainer = styled("div")({
    width: "90%",
    marginLeft: "130px",
    marginTop: "100px",
})

function index() {
    return (
        <TableContainer>
            <Typography>
                Table
            </Typography>
        </TableContainer>
    )
}

export default index
