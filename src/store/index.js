import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gamesInfo: null,
    matchInfo: null,
    liveMatches: null
  },

  getters: {
    gamesInfo: state => state.gamesInfo,
    matchInfo: state => state.matchInfo,
    liveMatches: state => state.liveMatches
  },

  mutations: {
    setGamesInfo(state, payload) {
      state.gamesInfo = payload
    },
    setMatchInfo(state, payload) {
      state.matchInfo = payload
    },
    setLiveMatches(state, payload) {
      state.liveMatches = payload
    }
  },

  actions: {
    async getGamesInfo({commit}) {
      const resp = await (await fetch('https://api.opendota.com/api/proMatches')).json()
      commit('setGamesInfo', resp)
    },
    async getMatchInfo({commit}, id) {
      const resp = await (await fetch(`https://api.opendota.com/api/matches/${id}`)).json()
      commit('setMatchInfo', resp)
    },
    async getLiveMatches({commit}) {
      const resp = await (await fetch(`https://api.opendota.com/api/live`)).json()
      console.log(resp);
      commit('setLiveMatches', resp)
    }
  }
})