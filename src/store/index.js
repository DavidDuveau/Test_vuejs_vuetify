import Vue from 'vue'
import Vuex from 'vuex'
import EventServices from '@/services/EventServices.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    event: {},
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
    },

    SET_EVENT(state, event) {
      state.event = event;
    }
  },

  actions: {
    setEvents({ commit }) {
      EventServices.getEvents()
        .then(res => {
          commit('SET_EVENTS', res.data);
        })
        .catch(err => {
          console.log(err);
        })
    },

    setEvent({ commit }, id) {
      EventServices.getEventById(id)
        .then(res => {
          commit('SET_EVENT', res.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  },

  modules: {
  }
})
