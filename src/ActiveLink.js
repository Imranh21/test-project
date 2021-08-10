import {withRouter} from 'next/router'
import Link from 'next/link';
import { styled } from '@material-ui/system';
import { Typography } from '@material-ui/core';



const BarLink = styled("div")({
    width: "94px",
    margin: "10px 0 0",
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    cursor: "pointer"
    
})

const Img = styled("img")({
    width: "20px",
    height: "20px"
})

function ActiveLink({router, data: {icon, title, path}}) {
    

    const handleClick = event => {
        event.preventDefault();
        router.push(path)
        
    }
    

    const isCurrentPath = router.pathname === path || router.asPath === path
    return (
        <div className="hoverLink" onClick={handleClick}>
            <Link className="hoverLink" href={path} >
                <BarLink className={router.pathname === `${path}` ? "active" : ""}>
                    <Img  src={icon} alt={title}/>
                    {router.pathname === `${path}` ? <Typography mt={1} varianr="h5" color="#fff">{title}</Typography> : null}
                </BarLink>
            </Link>
        </div>
    )
}

export default withRouter(ActiveLink)
