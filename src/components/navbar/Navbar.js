import { styled } from '@material-ui/system';
import {NavContainer, NavWrapper, LeftBox, Ham, SearchBox, SearchIcon, SearchInput, RightBox, Arrow, NotficationBox, NotiDot, NotiIcon, UserImg} from './comps'


function Navbar() {
    return (
        <NavContainer>
            <NavWrapper>
                <LeftBox>
                    <Ham src="/navicons/hambur.png" alt="menu"/>
                    <SearchBox>
                        <SearchIcon src="/navicons/search.png" alt="search"/>
                        <SearchInput />
                    </SearchBox>
                </LeftBox>
                <RightBox>
                    <Arrow src="/navicons/arrow.png" alt="arrow" />
                    <NotficationBox>
                        <NotiIcon src="/navicons/noti.png" alt="noti"/>
                        <NotiDot />
                    </NotficationBox>
                    <UserImg src="/face.png" alt="user"/>
                </RightBox>
            </NavWrapper>
        </NavContainer>
    )
}

export default Navbar
