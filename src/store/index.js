import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gamesInfo: null,
    matchInfo: null
  },

  getters: {
    gamesInfo: state => state.gamesInfo,
    matchInfo: state => state.matchInfo
  },

  mutations: {
    getGamesI(state, payload) {
      state.gamesInfo = payload
    },
    getMatchI(state, payload) {
      state.matchInfo = payload
    }
  },

  actions: {
    async getGamesInfo({commit}) {
      const resp = await (await fetch('https://api.opendota.com/api/proMatches')).json()
      commit('getGamesI', resp)
    },
    async getMatchInfo({commit}, id) {
      const resp = await (await fetch(`https://api.opendota.com/api/matches/${id}`)).json()
      commit('getMatchI', resp)
    }
  }
})