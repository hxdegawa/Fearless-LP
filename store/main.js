export const state = () => ({
  isInitRender: true
})

export const mutations = {
  isInitRender(state) {
    state.isInitRender = false
  }
}

export const getters = {
  getRenderStatus(state) {
    return state.isInitRender
  }
}

export const actions = {
  initialize({ commit }) {
    commit('isInitRender')
  }
}
