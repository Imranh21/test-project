import { styled } from '@material-ui/system';


export const NavContainer = styled("div")({
    minWidth: "90%",
    position: "fixed",
    left: "120px",
    top: "0",
    
    
})
export const NavWrapper = styled("div")({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: "10px 0"
})

export const LeftBox = styled("div")({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: "20px"
    
})
export const RightBox = styled("div")({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: "20px"
})

export const Ham = styled("img")({
    width: "14px",
    height: "14px"
})

export const SearchBox = styled("div")({
    width: "503px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: "20px",
    backgroundColor: "#fff",
    borderRadius: "50px",
    
})
export const SearchIcon = styled("img")({
    width: "12px",
    height: "12px",
    marginLeft: "30px"
})

export const SearchInput = styled("input")({
    flex: '1',
    padding: "10px",
    border: "none",
    backgroundColor: "transparent"
})

export const Arrow = styled("img")({
    width: "14px",
    height: "16px"
})

export const NotficationBox = styled("div")({
    position: "relative",
    width: "20px",
    height: "20px",
    display: "grid",
    placeItems: "center",
    marginLeft: "10px"
})
export const NotiDot = styled("div")({
    position: "absolute",
    top: "4px",
    right: "4px",
    width: "6px",
    height: "6px",
    borderRadius: "50px",
    backgroundColor: "#333"
})

export const NotiIcon = styled("img")({
    width: "14px",
    height: "16px"
})

export const UserImg = styled("img")({
    width: "30px",
    height: "30px",
    borderRadius: "10px",
    marginLeft: "10px"
})