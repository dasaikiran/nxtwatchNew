import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Links = styled(Link)`
  text-decoration: none;
`
export const VideoItemLi = styled.li`
  display: flex;
  margin-right: 15px;
  margin-bottom: 15px;
`
export const ThumbnailImg = styled.img`
  width: 400px;
  height: 250px;
  border-radius: 10px;
`
export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  width: 400px;
  box-sizing: border-box;
`
export const ProfileImg = styled.img`
  width: 40px;
  margin-right: 10px;
`
export const ThumbnailContent = styled.div`
  display: flex;
  flex-direction: column;
`
export const Para = styled.p`
  margin: 0px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 17px;
  color: #909090;
`
export const Para1 = styled.p`
  margin: 0px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #606060;
`
export const YearAndViews = styled.div`
  display: flex;
`
