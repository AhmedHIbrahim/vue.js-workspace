import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

// import CoachDetails from "./pages/coaches/CoachDetail.vue";
// import CoachRegisteration from "./pages/coaches/CoachRegisteration.vue";
// import ContactCoach from "./pages/requests/ContactCoach.vue";
// import RequestsReceived from "./pages/requests/RequestsReceived.vue";
// import UserAuth from "./pages/auth/UserAuth.vue";
import CoachesList from "./pages/coaches/CoachesList.vue";
import NotFound from "./pages/NotFound.vue";
import store from "./store/index.js";

// lazy load of CoachDetails
const CoachDetails = () => import("./pages/coaches/CoachDetail.vue");
const CoachRegisteration = () =>
  import("./pages/coaches/CoachRegisteration.vue");
const ContactCoach = () => import("./pages/requests/ContactCoach.vue");
const RequestsReceived = () => import("./pages/requests/RequestsReceived.vue");
const UserAuth = () => import("./pages/auth/UserAuth.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/coaches",
    },
    {
      path: "/coaches",
      component: CoachesList,
    },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props: true,
      children: [
        {
          path: "contact",
          component: ContactCoach,
        },
      ],
    },
    {
      path: "/register",
      component: CoachRegisteration,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/requests",
      component: RequestsReceived,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/auth",
      component: UserAuth,
      meta: {
        requiresUnauth: true,
      },
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

// navigation guard
router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthanticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthanticated) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;
