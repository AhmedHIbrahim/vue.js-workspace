export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    console.log("state: ", state);
    return state.token;
  },
  isAuthanticated(state) {
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  },
};
