import {formatDistanceToNow} from 'date-fns'

import {
  VideoItemLi,
  ThumbnailImg,
  ContentContainer,
  ThumbnailContent,
  Para,
  YearAndViews,
  Para1,
  Links,
} from './styledComponents'

const TrendingItem = props => {
  const {item} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = item
  const {name} = channel

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

export default TrendingItem
