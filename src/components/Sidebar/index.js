import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SideBar,
  SectionContainer,
  Container,
  HomeIcon,
  Para,
  TrendingIcon,
  GamingIcon,
  PlaylistIcon,
  ContactPara,
  FollowContainer,
  SectionUl,
  Linc,
  Img,
} from './styledComponents'

const Sidebar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {
        darkTheme,
        homeActive,
        trendingActive,
        gamingActive,
        playlistActive,
        onGamingClick,
        onHomeClick,
        onPlaylistClick,
        onTrendingClick,
      } = value
      const homeClick = () => {
        onHomeClick()
      }
      const trendClick = () => {
        onTrendingClick()
      }
      const gameClick = () => {
        onGamingClick()
      }
      const playlistClick = () => {
        onPlaylistClick()
      }
      return (
        <SideBar theme={darkTheme.toString()}>
          <SectionUl>
            <Linc to="/">
              <Container onClick={homeClick} isactive={homeActive.toString()}>
                <HomeIcon isactive={homeActive.toString()} />
                <Para isactive={homeActive.toString()}>Home</Para>
              </Container>
            </Linc>
            <Linc to="/trending">
              <Container
                onClick={trendClick}
                isactive={trendingActive.toString()}
              >
                <TrendingIcon isactive={trendingActive.toString()} />
                <Para isactive={trendingActive.toString()}>Trending</Para>
              </Container>
            </Linc>
            <Linc to="/gaming">
              <Container onClick={gameClick} isactive={gamingActive.toString()}>
                <GamingIcon isactive={gamingActive.toString()} />
                <Para isactive={gamingActive.toString()}>Gaming</Para>
              </Container>
            </Linc>
            <Linc to="/saved-videos">
              <Container
                onClick={playlistClick}
                isactive={playlistActive.toString()}
              >
                <PlaylistIcon isactive={playlistActive.toString()} />
                <Para isactive={playlistActive.toString()}>Saved videos</Para>
              </Container>
            </Linc>
          </SectionUl>
          <SectionContainer>
            <ContactPara>CONTACT US</ContactPara>
            <FollowContainer>
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </FollowContainer>
            <ContactPara>
              Enjoy! Now to see your channels and recommendations!
            </ContactPara>
          </SectionContainer>
        </SideBar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar
