const mutations = {
  setChannel (state, channel) {
    state.channel = channel
  },

  setChannelType (state, channelType) {
    state.channelType = channelType
  },

  setShow (state, show) {
    state.show = show
  },

  setPlaylist (state, playlist) {
    state.show.playlist = playlist
  },

  setAudioList (state, audioList) {
    if (state.show.audioList.length) {
      state.show.audioList = state.show.audioList.concat(audioList)
    } else {
      state.show.audioList = audioList
    }
  },

  setFullScreen (state, fullScreen) {
    state.fullScreen = fullScreen
  },

  setPlayingState (state, playState) {
    state.playingState = playState
  },

  setCurrentIndex (state, index) {
    state.currentIndex = index
  },

  setPlayerShow (state, isShow) {
    state.playerShow = isShow
  },

  setFavoriteList (state, list) {
    state.favoriteList = list
  }
}
export default mutations
