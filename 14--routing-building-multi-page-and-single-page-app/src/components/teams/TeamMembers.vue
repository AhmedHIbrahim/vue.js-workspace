<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
  props: ["teamId"],
  components: {
    UserItem,
  },
  inject: ["users", "teams"],
  data() {
    return {
      members: [],
      teamName: "",
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find((team) => team.id == teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];

      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id == member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },

  created() {
    // this.$route.path // /teams/t1
    this.loadTeamMembers(this.teamId);
    console.log(this.$route.query); //query is optional, so it's not sended as prop, so this.query is undefined
  },

  beforeRouteUpdate(to, from, next) {
    console.log("TeamMembers cmp beforeRouteUpdate");
    console.log(to, from);
    // this.loadTeamMembers(to.params.teamId)
    next();
  },

  watch: {
    teamId() {
      this.loadTeamMembers(this.teamId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
