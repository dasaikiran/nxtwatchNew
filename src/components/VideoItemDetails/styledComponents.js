import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'
import ReactPlayer from 'react-player'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

export const ReactPlayerS = styled(ReactPlayer)``

export const TrendingMainContainer = styled.div`
  margin-top: 7vh;
`
export const TrendingBodyContainer = styled.div`
  margin-left: 20vw;
  background-color: ${prop => (prop.theme === 'true' ? '#0f0f0f' : '#f9f9f9')};
`
export const TrendingBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8fafc;
  min-height: 93vh;
  padding: 20px;
`
export const Div = styled.div`
  display: flex;
  align-items: center;
`
export const TrendingHeading = styled.h1`
  font-size: 30px;
  font-weight: bold;
`
export const TrendingBodyUl = styled.ul``
export const FireIcon = styled(HiFire)`
  font-size: 30px;
  color: #ff0b37;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
`
export const FailureHeading = styled.h1`
  font-size: 20px;
`
export const FailureImg = styled.img`
  width: 250px;
`
export const FailurePara = styled.p`
  font-size: 15px;
`
export const LoaderContainer = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
`
export const RetryButton = styled.button`
  width: 80px;
  height: 30px;
  border: 0px solid;
  background-color: #4f46e5;
  font-size: 10px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
`
export const VideoItemLi = styled.li`
  display: flex;
  flex-direction: column;
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
  width: 700px;
  box-sizing: border-box;
`
export const ContentContainer1 = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  width: 700px;
  box-sizing: border-box;
  margin-top: 20px;
`
export const ProfileImg = styled.img`
  width: 40px;
  margin-right: 20px;
`
export const ThumbnailContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 0px solid #616e7c;
  border-bottom-width: 1px;
`
export const ThumbnailContent1 = styled(ThumbnailContent)`
  padding-top: 0px;
  border-bottom-width: 0px;
`
export const Para = styled.p`
  margin: 0px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 17px;
  color: #909090;
`

export const DescPara = styled(Para)`
  margin-top: 30px;
`

export const Para1 = styled.p`
  margin: 0px;
  margin-right: 5px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #606060;
`
export const YearAndViews = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LikesDislikeUl = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0px;
  align-items: center;
  margin: 0px;
`
export const LikeDivLi = styled.li`
  display: flex;
  margin: 10px;
  align-items: center;
`
export const LikeIcon = styled(AiFillLike)`
  font-size: 20px;
  margin-right: 5px;
  margin-bottom: 5px;
`
export const DislikeIcon = styled(AiFillDislike)`
  font-size: 20px;
  margin-right: 5px;
`
export const SaveIcon = styled(MdPlaylistAdd)`
  font-size: 20px;
  margin-right: 5px;
`
export const LikeButton = styled.button`
  background-color: transparent;
  display: flex;
  outline: none;
  border: 0px solid;
  align-items: center;
  cursor: pointer;
  color: ${prop => (prop.like === 'true' ? '#2563eb' : '#64748b')};
`
export const DislikeButton = styled.button`
  background-color: transparent;
  display: flex;
  outline: none;
  border: 0px solid;
  align-items: center;
  cursor: pointer;
  color: ${prop => (prop.dislike === 'true' ? '#2563eb' : '#64748b')};
`
export const SaveButton = styled.button`
  background-color: transparent;
  display: flex;
  outline: none;
  border: 0px solid;
  align-items: center;
  cursor: pointer;
  color: ${prop => (prop.save === 'true' ? '#2563eb' : '#64748b')};
`
export const Para2 = styled.p`
  color: ${prop =>
    prop.like === 'true' || prop.dislike === 'true' || prop.save === 'true'
      ? '#2563eb'
      : '#64748b'};
`
