import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  Nav,
  DescViewUl,
  Li,
  CustomButton,
  ProfileImg,
  LogoutButton,
  MobileViewUl,
  MoonIcon,
  MenuIcon,
  LogoutIcon,
  WebsiteImgHome,
  LogoutPopupButton,
  LogoutPopupContainer,
  LogoutPopupHeading,
  ButtonDiv,
  PopupCloseButton,
  PopUp,
  Overlay,
  SunIcon,
} from './styledComponents'

class Header extends Component {
  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  getPopupElement = () => <MenuIcon />

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {darkTheme, onChangeTheme, onHomeClick} = value
          console.log(darkTheme)
          const onClickTheme = () => {
            onChangeTheme()
          }
          const onHomeLinkClick = () => {
            onHomeClick()
          }
          return (
            <>
              <Nav theme={darkTheme.toString()}>
                <Link onClick={onHomeLinkClick} to="/">
                  <WebsiteImgHome
                    src={
                      darkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </Link>
                <DescViewUl>
                  <Li>
                    <CustomButton onClick={onClickTheme} data-testid="theme">
                      {darkTheme ? <SunIcon /> : <MoonIcon />}
                    </CustomButton>
                  </Li>
                  <Li>
                    <CustomButton>
                      <ProfileImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </CustomButton>
                  </Li>
                  <Li>
                    <Overlay>
                      <PopUp
                        trigger={
                          <LogoutButton type="button">Logout</LogoutButton>
                        }
                        modal
                        nested
                      >
                        {close => (
                          <LogoutPopupContainer>
                            <LogoutPopupHeading>
                              Are you sure, you want to logout?
                            </LogoutPopupHeading>
                            <ButtonDiv>
                              <PopupCloseButton
                                type="button"
                                onClick={() => close()}
                              >
                                Cancel
                              </PopupCloseButton>
                              <LogoutPopupButton
                                type="button"
                                onClick={this.onLogout}
                              >
                                Confirm
                              </LogoutPopupButton>
                            </ButtonDiv>
                          </LogoutPopupContainer>
                        )}
                      </PopUp>
                    </Overlay>
                  </Li>
                </DescViewUl>
                <MobileViewUl>
                  <Li>
                    <CustomButton data-testid="theme">
                      <MoonIcon />
                    </CustomButton>
                  </Li>
                  <Li>
                    <CustomButton>{this.getPopupElement()}</CustomButton>
                  </Li>
                  <Li>
                    <PopUp
                      trigger={
                        <CustomButton onClick={this.onLogout}>
                          <LogoutIcon />
                        </CustomButton>
                      }
                      modal
                      nested
                    >
                      {close => (
                        <LogoutPopupContainer>
                          <LogoutPopupHeading>
                            Are you sure, you want to logout?
                          </LogoutPopupHeading>
                          <ButtonDiv>
                            <PopupCloseButton
                              type="button"
                              onClick={() => close()}
                            >
                              Cancel
                            </PopupCloseButton>
                            <LogoutPopupButton
                              type="button"
                              onClick={this.onLogout}
                            >
                              Confirm
                            </LogoutPopupButton>
                          </ButtonDiv>
                        </LogoutPopupContainer>
                      )}
                    </PopUp>
                  </Li>
                </MobileViewUl>
              </Nav>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(Header)
