import { styled } from '@material-ui/system';


export const Bar = styled('div')({
    position: "absolute",
    width: "120px",
    minHeight: "100vh",
    top: 0,
    left: 0,
    padding: "10px 0px 20px",
    backgroundColor: "#663399",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
})
export const LinkContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px"
    

})
export const BarLink = styled("div")({
    width: "94px",
    margin: "10px 0",
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px"  
    
})

export const Img = styled("img")({
    width: "20px",
    height: "20px"
})