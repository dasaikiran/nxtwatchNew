import {
  VideoItemLi,
  ThumbnailImg,
  ContentContainer,
  Para,
  Para1,
  Links,
} from './styledComponents'

const GamingItem = props => {
  const {item} = props
  const {id, title, thumbnailUrl, viewCount} = item

  return (
    <Links to={`/videos/${id}`}>
      <VideoItemLi>
        <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
        <ContentContainer>
          <Para1>{title}</Para1>
          <Para>{`${viewCount} Watching Worldwide`}</Para>
        </ContentContainer>
      </VideoItemLi>
    </Links>
  )
}

export default GamingItem
