import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Trending from './components/Trending'
import NotFound from './components/NotFound'
import Gaming from './components/Gaming'
import NxtWatchContext from './context/NxtWatchContext'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    homeActive: true,
    trendingActive: false,
    gamingActive: false,
    playlistActive: false,
    savedList: [],
    darkTheme: false,
  }

  onAddSavedList = obj => {
    const {savedList} = this.state
    const newObj = savedList.find(item => item.id === obj.id)
    if (newObj !== undefined) {
      const newList = savedList.filter(item => item.id !== obj.id)
      this.setState({
        savedList: newList,
      })
    } else {
      this.setState(prev => ({
        savedList: [...prev.savedList, obj],
      }))
    }
  }

  onChangeTheme = () => {
    console.log('onChangeTheme')
    this.setState(prev => ({
      darkTheme: !prev.darkTheme,
    }))
  }

  componentDidMount = () => {
    const homeActive =
      localStorage.getItem('homeActive') === null
        ? 'false'
        : localStorage.getItem('homeActive')
    const trendingActive =
      localStorage.getItem('trendingActive') === null
        ? 'false'
        : localStorage.getItem('trendingActive')
    const gamingActive =
      localStorage.getItem('gamingActive') === null
        ? 'false'
        : localStorage.getItem('gamingActive')
    const playlistActive =
      localStorage.getItem('playlistActive') === null
        ? 'false'
        : localStorage.getItem('playlistActive')
    this.setState({
      homeActive,
      trendingActive,
      gamingActive,
      playlistActive,
    })
  }

  onGetObj = val => {
    const obj = {
      homeActive: false,
      trendingActive: false,
      gamingActive: false,
      playlistActive: false,
    }
    if (val === 'home') {
      return {...obj, homeActive: true}
    }
    if (val === 'trend') {
      return {...obj, trendingActive: true}
    }
    if (val === 'gaming') {
      return {...obj, gamingActive: true}
    }
    if (val === 'playlist') {
      return {...obj, playlistActive: true}
    }
    return obj
  }

  onHomeClick = () => {
    const stateObj = this.onGetObj('home')
    localStorage.clear()
    localStorage.setItem('homeActive', 'true')
    this.setState(stateObj)
  }

  onTrendingClick = () => {
    const stateObj = this.onGetObj('trend')
    localStorage.clear()
    localStorage.setItem('trendingActive', 'true')
    this.setState(stateObj)
  }

  onGamingClick = () => {
    const stateObj = this.onGetObj('gaming')
    localStorage.clear()
    localStorage.setItem('gamingActive', 'true')
    this.setState(stateObj)
  }

  onPlaylistClick = () => {
    const stateObj = this.onGetObj('playlist')
    localStorage.clear()
    localStorage.setItem('playlistActive', 'true')
    this.setState(stateObj)
  }

  render() {
    const {
      homeActive,
      trendingActive,
      gamingActive,
      playlistActive,
      savedList,
      darkTheme,
    } = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          homeActive,
          trendingActive,
          gamingActive,
          playlistActive,
          onHomeClick: this.onHomeClick,
          onTrendingClick: this.onTrendingClick,
          onGamingClick: this.onGamingClick,
          onPlaylistClick: this.onPlaylistClick,
          savedList,
          onAddSavedList: this.onAddSavedList,
          darkTheme,
          onChangeTheme: this.onChangeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
