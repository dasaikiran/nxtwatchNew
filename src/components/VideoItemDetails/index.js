import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  TrendingMainContainer,
  TrendingBodyContainer,
  FailureContainer,
  FailureHeading,
  FailureImg,
  FailurePara,
  RetryButton,
  LoaderContainer,
  TrendingBody,
  Div,
  VideoItemLi,
  ContentContainer1,
  ProfileImg,
  ThumbnailContent,
  ThumbnailContent1,
  Para,
  Para2,
  YearAndViews,
  Para1,
  ReactPlayerS,
  DescPara,
  LikesDislikeUl,
  LikeDivLi,
  LikeIcon,
  DislikeIcon,
  SaveIcon,
  LikeButton,
  DislikeButton,
  SaveButton,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {
    videoObj: {},
    apiStatus: apiStatusConstants.initial,
    like: false,
    dislike: false,
  }

  componentDidMount = () => {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const obj = data.video_details.channel
      const newObj = {
        name: obj.name,
        profileImageUrl: obj.profile_image_url,
        subscriberCount: obj.subscriber_count,
      }
      const item = data.video_details
      const videoObj = {
        id: item.id,
        title: item.title,
        videoUrl: item.video_url,
        thumbnailUrl: item.thumbnail_url,
        channel: newObj,
        viewCount: item.view_count,
        publishedAt: item.published_at,
        description: item.description,
      }

      this.setState({
        videoObj,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  getString = publishedAt => {
    const str = formatDistanceToNow(new Date(publishedAt), {addSuffix: true})
    const spaceIndex = str.indexOf(' ')
    const newStr = str.slice(spaceIndex + 1)
    return newStr
  }

  onRetry = () => {
    this.getTrendingList()
  }

  renderVideosList = () => {
    const {videoObj, like, dislike} = this.state
    const {
      title,
      channel,
      videoUrl,
      viewCount,
      publishedAt,
      description,
    } = videoObj
    const {name, profileImageUrl, subscriberCount} = channel
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {onAddSavedList, savedList} = value
          const presObj = savedList.find(item => item.id === videoObj.id)
          console.log(presObj)
          console.log('hello mama')
          console.log(videoObj)
          let isSaved
          if (presObj !== undefined) {
            isSaved = true
          } else {
            isSaved = false
          }

          const onLikeClick = () => {
            this.setState(prev => ({
              like: !prev.like,
              dislike: false,
            }))
          }
          const onDislikeClick = () => {
            this.setState(prev => ({
              like: false,
              dislike: !prev.dislike,
            }))
          }

          const onSaveClick = () => {
            onAddSavedList(videoObj)
          }

          return (
            <VideoItemLi>
              <ReactPlayerS width="100%" height="450px" url={videoUrl} />

              <ThumbnailContent>
                <Para1>{title}</Para1>

                <YearAndViews>
                  <Div>
                    <Para>{`${viewCount} views . `} </Para>
                    <Para>{this.getString(publishedAt)}</Para>
                  </Div>

                  <LikesDislikeUl>
                    <LikeDivLi>
                      <LikeButton like={like.toString()} onClick={onLikeClick}>
                        <LikeIcon like={like.toString()} />
                        <Para2 like={like.toString()}>Like</Para2>
                      </LikeButton>
                      <DislikeButton
                        dislike={dislike.toString()}
                        onClick={onDislikeClick}
                      >
                        <DislikeIcon />
                        <Para2 dislike={dislike.toString()}>Dislike</Para2>
                      </DislikeButton>
                      <SaveButton
                        save={isSaved.toString()}
                        onClick={onSaveClick}
                      >
                        <SaveIcon />
                        <Para2 save={isSaved.toString()}>
                          {isSaved ? 'Saved' : 'Save'}
                        </Para2>
                      </SaveButton>
                    </LikeDivLi>
                  </LikesDislikeUl>
                </YearAndViews>
              </ThumbnailContent>

              <ContentContainer1>
                <ProfileImg src={profileImageUrl} alt="channel logo" />
                <ThumbnailContent1>
                  <Para1>{name}</Para1>
                  <Para>{`${subscriberCount} subscribers`}</Para>
                  <DescPara>{description}</DescPara>
                </ThumbnailContent1>
              </ContentContainer1>
            </VideoItemLi>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderFailure = () => (
    <FailureContainer>
      <FailureImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailurePara>
        We are having some trouble to complete your request. Please try again.
      </FailurePara>
      <RetryButton onClick={this.onRetry}>Retry</RetryButton>
    </FailureContainer>
  )

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  getApiStatus = apiStatus => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosList()
      case apiStatusConstants.failure:
        return this.renderFailure()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <>
              <Header />
              <TrendingMainContainer>
                <Sidebar />
                <TrendingBodyContainer
                  theme={darkTheme.toString()}
                  data-testid="videoItemDetails"
                >
                  <TrendingBody>{this.getApiStatus(apiStatus)}</TrendingBody>
                </TrendingBodyContainer>
              </TrendingMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
