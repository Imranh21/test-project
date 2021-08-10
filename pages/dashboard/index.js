import { styled } from '@material-ui/system';
import DashBoardData from '../../src/data/dashboardData';
import Card from '../../src/components/dashboardcard/Card';

const DashContainer = styled("div")({
    width: "90%",
    marginLeft: "130px",
    marginTop: "100px",
})
const CardContainer = styled("div")({
    display: "flex",
})

function index() {
    return (
        <DashContainer >
            <CardContainer>
                {DashBoardData.map(d => {
                    return <Card key={d.id} data={d}/>
                })}
            </CardContainer>
        </DashContainer>
    )
}

export default index
