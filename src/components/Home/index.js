import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
import {WebsiteImgHome} from '../Header/styledComponents'
import VideoItem from '../VideoItem'
import Header from '../Header'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomeVideosContainer,
  NotFoundContainer,
  NotFoundHeading,
  NotFoundImg,
  NotFoundPara,
  RetryButton,
  FailureContainer,
  FailureHeading,
  FailureImg,
  FailurePara,
  LoaderContainer,
  BannerContainer,
  BannerContent,
  BannerButton,
  BannerPara,
  BannerCloseButton,
  CloseIcon,
  HomeBodyContainer,
  SearchContainer,
  SearchButton,
  SearchIcon,
  Input,
  HomeBody,
  HomeMainContainer,
  Label,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    bannerActive: true,
    apiStatus: apiStatusConstants.initial,
    searchVal: '',
    videosList: [],
  }

  componentDidMount = () => {
    this.getVideosList()
  }

  getVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {searchVal} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchVal}`
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const videosList = data.videos.map(item => {
        const obj = item.channel
        const newObj = {
          name: obj.name,
          profileImageUrl: obj.profile_image_url,
        }
        return {
          id: item.id,
          title: item.title,
          thumbnailUrl: item.thumbnail_url,
          channel: newObj,
          viewCount: item.view_count,
          publishedAt: item.published_at,
        }
      })
      this.setState({
        videosList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  closeBanner = () => {
    this.setState({bannerActive: false})
  }

  onRetry = () => {
    this.getVideosList()
  }

  renderVideosList = () => {
    const {videosList} = this.state
    const count = videosList.length
    return count ? (
      <HomeVideosContainer>
        {videosList.map(item => (
          <VideoItem item={item} key={item.id} />
        ))}
      </HomeVideosContainer>
    ) : (
      <NotFoundContainer>
        <NotFoundImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <NotFoundHeading>No Search results found</NotFoundHeading>
        <NotFoundPara>
          Try different key words or remove search filter
        </NotFoundPara>
        <RetryButton onClick={this.onRetry}>Retry</RetryButton>
      </NotFoundContainer>
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

  onSearchValChange = event => {
    this.setState({
      searchVal: event.target.value,
    })
  }

  onSearchClick = () => {
    this.getVideosList()
  }

  onKeyEnter = event => {
    if (event.key === 'Enter') {
      this.getVideosList()
    }
  }

  render() {
    const {bannerActive, apiStatus, searchVal} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme} = value

          return (
            <>
              <Header />
              <HomeMainContainer>
                <Sidebar />
                <HomeBody theme={darkTheme.toString()} data-testid="home">
                  {bannerActive ? (
                    <BannerContainer data-testid="banner">
                      <BannerContent>
                        <WebsiteImgHome
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerPara>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerPara>
                        <BannerButton>GET IT NOW</BannerButton>
                      </BannerContent>
                      <BannerCloseButton
                        data-testid="close"
                        onClick={this.closeBanner}
                      >
                        <CloseIcon />
                      </BannerCloseButton>
                    </BannerContainer>
                  ) : null}
                  <HomeBodyContainer data-testid="home">
                    <SearchContainer>
                      <Input
                        onChange={this.onSearchValChange}
                        onKeyDown={this.onKeyEnter}
                        value={searchVal}
                        type="search"
                        placeholder="Search"
                        id="search-input"
                      />

                      <SearchButton
                        data-testid="searchButton"
                        onClick={this.onSearchClick}
                      >
                        <Label htmlFor="search-input">
                          <SearchIcon />
                        </Label>
                      </SearchButton>
                    </SearchContainer>
                    {this.getApiStatus(apiStatus)}
                  </HomeBodyContainer>
                </HomeBody>
              </HomeMainContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
