import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./pages/TeamsList.vue";
import UsersList from "./pages/UsersList.vue";
import UsersFooter from "./pages/UsersFooter.vue";
import TeamsFooter from "./pages/TeamsFooter.vue";
import NotFound from "./pages/NotFound.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/teams",
    },
    // -- or add alias to teams
    {
      name: "teams",
      path: "/teams",
      meta: { needsAuth: true }, // alias: "/",
      //component: TeamsList,
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: "team-members",
          path: ":teamId",
          components: {
            default: TeamMembers,
          },
          props: true,
        },
      ],
    },
    {
      path: "/users",
      //component: UsersList,
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        console.log("Users beforeEnder");
        console.log(to, from);
        next();
      },
    },
    {
      // -- following be the last, to catch unintended navigation
      name: "not-found",
      path: "/:notFound(.*)",
      // redirect: "/teams",
      component: NotFound,
    },
  ],
  linkActiveClass: "active",
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);

    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

// navigation GUARD!!
router.beforeEach(function (to, from, next) {
  console.log("Gobal beforeEach");
  console.log(to, from);

  if (to.meta.needsAuth) {
    console.log("Needs Auth");
    next();
  } else {
    next();
  }

  // to cancel navigation next(false)
  //next('/');
  // if (to.name === "maintanance") {
  //   next();
  // } else {
  //   next({
  //     name: "maintanance",
  //     params: { message: "Website under maintanance" },
  //   });
  // }
});

router.afterEach(function (to, from, next) {
  console.log("Gobal afterEach");
  console.log(to, from);
  next();
});

export default router;
