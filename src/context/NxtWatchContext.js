import React from 'react'

const NxtWatchContext = React.createContext({
  homeActive: '',
  trendingActive: '',
  gamingActive: '',
  playlistActive: '',
  savedList: [],
  onAddSavedList: () => {},
  onHomeClick: () => {},
  onTrendingClick: () => {},
  onGamingClick: () => {},
  onPlaylistClick: () => {},
  darkTheme: '',
  onChangeTheme: () => {},
})

export default NxtWatchContext
