import {formatDistanceToNow} from 'date-fns'

import {
  VideoItemLi,
  ThumbnailImg,
  ContentContainer,
  ProfileImg,
  ThumbnailContent,
  Para,
  YearAndViews,
  Para1,
  Links,
} from './styledComponents'

const VideoItem = props => {
  const {item} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = item
  const {name, profileImageUrl} = channel

  const getString = () => {
    const str = formatDistanceToNow(new Date(publishedAt), {addSuffix: true})
    const spaceIndex = str.indexOf(' ')
    const newStr = str.slice(spaceIndex + 1)
    return newStr
  }

  return (
    <Links to={`/videos/${id}`}>
      <VideoItemLi>
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <ContentContainer>
          <ProfileImg src={profileImageUrl} alt="channel logo" />
          <ThumbnailContent>
            <Para1>{title}</Para1>
            <Para>{name}</Para>
            <YearAndViews>
              <Para>{`${viewCount} views . `} </Para>
              <Para>{getString()}</Para>
            </YearAndViews>
          </ThumbnailContent>
        </ContentContainer>
      </VideoItemLi>
    </Links>
  )
}

export default VideoItem
