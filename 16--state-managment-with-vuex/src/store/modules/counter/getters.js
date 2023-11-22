export default {
  finalCounter(state, getters) {
    return state.counter * 2;
  },
  normalizedCounter(state, getters) {
    const finalCounter = getters.finalCounter * 3;

    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
  testAuth(state, getters, rootState, rootGetters) {
    return rootState.isLoggedIn;
  },
};
