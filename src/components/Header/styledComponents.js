import styled from 'styled-components'
import {FaMoon} from 'react-icons/fa'
import {MdMenu} from 'react-icons/md'
import {FiLogOut, FiSun} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import {WebsiteImg} from '../Login/styledComponents'

export const SunIcon = styled(FiSun)`
  font-size: 20px;
  cursor: pointer;
`

export const Nav = styled.nav`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: ${prop => (prop.theme === 'true' ? '#424242' : '#ffffff')};
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 1px;
  border-color: #cccccc;
  height: 7vh;
  position: fixed;
  top: 0;
  width: calc(100%);
  z-index: 1000;
  height: 7vh;
  width: 100vw;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  } ;
`
export const DescViewUl = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    list-style-type: none;
    padding-left: 0px;
    align-items: center;
    margin: 0px;
  } ;
`
export const WebsiteImgHome = styled(WebsiteImg)`
  margin: 0px;
  cursor: pointer;
`
export const Li = styled.li`
  margin: 10px;
`
export const CustomButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
export const ProfileImg = styled.img`
  width: 25px;
  cursor: pointer;
`
export const LogoutButton = styled.button`
  border: 2px solid #3b82f6;
  background-color: transparent;
  color: #3b82f6;
  font-size: 13px;
  font-weight: bold;
  width: 80px;
  height: 30px;
  cursor: pointer;
`
export const MobileViewUl = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0px;
  align-items: center;
  margin: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MoonIcon = styled(FaMoon)`
  font-size: 20px;
  cursor: pointer;
`
export const MenuIcon = styled(MdMenu)`
  font-size: 20px;
  cursor: pointer;
`
export const LogoutIcon = styled(FiLogOut)`
  font-size: 20px;
  cursor: pointer;
`

export const LogoutPopupContainer = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`
export const LogoutPopupHeading = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #00306e;
`
export const ButtonDiv = styled.div``
export const LogoutPopupButton = styled.button`
  border: 0px solid;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 13px;
  font-weight: bold;
  width: 85px;
  height: 35px;
  cursor: pointer;
  margin: 10px;
`
export const PopupCloseButton = styled(LogoutButton)`
  width: 80px;
  height: 35px;
  color: #7e858e;
  border-color: #7e858e;
  margin: 10px;
  box-sizing: border-box;
`
export const PopUp = styled(Popup)`
  width: 40vw;
  height: 40vh;
  &-overlay {
    background-color: rgba(35, 31, 32, 0.5);
  }
`
export const Overlay = styled.div``
