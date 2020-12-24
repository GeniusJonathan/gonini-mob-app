<template>
  <base-layout page-title="Add new team" page-default-back-link="/teams">
    <create-team-form @save-team="saveTeam"></create-team-form>
  </base-layout>
</template>

<script>
import CreateTeamForm from "../components/teams/CreateTeamForm";

export default {
  components: {
    CreateTeamForm,
  },
  methods: {
    saveTeam(teamData) {
      this.$store.dispatch("addTeam", teamData);
      this.$router.replace("/teams");
    },
  },
};
</script>