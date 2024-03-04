import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/NxtWatchContext'
import GamingItem from '../GamingItem'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  TrendingMainContainer,
  TrendingBodyContainer,
  TrendingBannerContainer,
  TrendingHeading,
  TrendingBodyUl,
  FireIcon,
  FailureContainer,
  FailureHeading,
  FailureImg,
  FailurePara,
  RetryButton,
  LoaderContainer,
  TrendingBody,
  Div,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {trendingList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount = () => {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const trendingList = data.videos.map(item => ({
        id: item.id,
        title: item.title,
        thumbnailUrl: item.thumbnail_url,
        viewCount: item.view_count,
      }))
      this.setState({
        trendingList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderVideosList = () => {
    const {trendingList} = this.state
    return (
      <TrendingBodyUl>
        {trendingList.map(item => (
          <GamingItem item={item} key={item.id} />
        ))}
      </TrendingBodyUl>
    )
  }

  onRetry = () => {
    this.getTrendingList()
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
                  data-testid="gaming"
                >
                  <TrendingBannerContainer>
                    <Div>
                      <FireIcon />
                    </Div>

                    <TrendingHeading>Gaming</TrendingHeading>
                  </TrendingBannerContainer>
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

export default Gaming
