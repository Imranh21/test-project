import { styled } from '@material-ui/system';
import {Typography} from '@material-ui/core'
import {DashBoardCard, BoxOne, Icon, BoxTwo} from './comps'

function Card({data: {id, title, iconBG, iconColor, number, icon}}) {

    return (
        <DashBoardCard>
            <BoxOne style={{backgroundColor: `${iconBG}`}}>
                <Icon src={icon} alt="icon"/>
            </BoxOne>
            <BoxTwo>
                <Typography variant="h6" color="#ccc">{title}</Typography>
                <Typography variant="h4" color={iconColor}>{number}</Typography>
            </BoxTwo>
        </DashBoardCard>
            
    )
}

export default Card
