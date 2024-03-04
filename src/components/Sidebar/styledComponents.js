import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {Link} from 'react-router-dom'

export const Linc = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const SideBar = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  background-color: ${prop => (prop.theme === 'true' ? '#424242' : '#ffffff')};
  height: 93vh;
  justify-content: space-between;
  padding-bottom: 20px;
  border: 0px solid;
  border-right-width: 1px;
  animation: slideIn 0.7s ease;
  position: fixed;
  top: 7vh;
  @keyframes slideIn {
    from {
      transform: translateX(-250px);
    }
    to {
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 767px) {
    display: none;
  } ;
`
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SectionUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0px;
`
export const Container = styled.li`
  display: flex;
  align-items: center;
  padding-left: 20px;
  cursor: pointer;
  background-color: ${prop =>
    prop.isactive === 'true' ? '#edf1f6' : 'transparent'};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f9fafc;
  }
`
export const FollowContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
`
export const HomeIcon = styled(AiFillHome)`
  font-size: 17px;
  margin-right: 20px;
  color: ${prop => (prop.isactive === 'true' ? '#ff0000' : '#000000')};
`
export const Para = styled.p`
  font-size: 16px;
  font-weight: ${prop => (prop.isactive === 'true' ? 'bold' : '400')};
`
export const TrendingIcon = styled(HiFire)`
  font-size: 18px;
  margin-right: 20px;
  color: ${prop => (prop.isactive === 'true' ? '#ff0000' : '#000000')};
`
export const GamingIcon = styled(SiYoutubegaming)`
  font-size: 18px;
  margin-right: 20px;
  color: ${prop => (prop.isactive === 'true' ? '#ff0000' : '#000000')};
`
export const PlaylistIcon = styled(MdPlaylistAdd)`
  font-size: 18px;
  margin-right: 20px;
  color: ${prop => (prop.isactive === 'true' ? '#ff0000' : '#000000')};
`
export const ContactPara = styled(Para)`
  font-size: 18px;
  font-weight: bold;
  color: #383838;
  padding-left: 20px;
  padding-right: 20px;
`
export const Img = styled.img`
  width: 40px;
  margin-right: 10px;
`
