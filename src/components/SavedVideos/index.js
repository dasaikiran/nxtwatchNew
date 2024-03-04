import NxtWatchContext from '../../context/NxtWatchContext'
import TrendingItem from '../TrendingItem'
import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  TrendingMainContainer,
  TrendingBodyContainer,
  TrendingBannerContainer,
  TrendingHeading,
  TrendingBodyUl,
  FireIcon,
  NotFoundContainer,
  NotFoundHeading,
  NotFoundImg,
  NotFoundPara,
  TrendingBody,
  Div,
} from './styledComponents'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {savedList, darkTheme} = value
      const count = savedList.length

      return (
        <>
          <Header />
          <TrendingMainContainer>
            <Sidebar />
            <TrendingBodyContainer
              theme={darkTheme.toString()}
              data-testid="SavedVideos"
            >
              {count === 0 ? (
                <NotFoundContainer>
                  <NotFoundImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                    alt="no saved videos"
                  />
                  <NotFoundHeading>No saved videos found</NotFoundHeading>
                  <NotFoundPara>
                    You can save your videos while watching them
                  </NotFoundPara>
                </NotFoundContainer>
              ) : (
                <>
                  <TrendingBannerContainer>
                    <Div>
                      <FireIcon />
                    </Div>

                    <TrendingHeading>Saved Videos</TrendingHeading>
                  </TrendingBannerContainer>
                  <TrendingBody>
                    <TrendingBodyUl>
                      {savedList.map(item => (
                        <TrendingItem item={item} key={item.id} />
                      ))}
                    </TrendingBodyUl>
                  </TrendingBody>
                </>
              )}
            </TrendingBodyContainer>
          </TrendingMainContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
