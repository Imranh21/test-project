import { Typography } from '@material-ui/core';
import { SidebarData } from './Data';
import ActiveLink from '../../ActiveLink';
import {Bar, LinkContainer, Img} from "./comps"


function Sidebar() {
    return (
        <Bar>
            <Typography variant="h5" color="#fff">Gull</Typography>
            <LinkContainer>
                {SidebarData.map(data => (
                    <ActiveLink key={data.id}  data={data} />
                ))}
            </LinkContainer>
        </Bar>
    )
}

export default Sidebar
