export default {
  login(context, payload) {
    context.commit("setAuth", { isAuth: true });
  },
  logout(context, payload) {
    context.commit("setAuth", { isAuth: false });
  },
};
