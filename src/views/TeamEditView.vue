<template>
  <base-layout
    page-title="Modify Team"
    page-default-back-link="/teams"
  >
    <h2 v-if="!loadedTeam">Could not find a team for the given id.</h2>
    <edit-team-form :loadedTeam="loadedTeam" @save-team="saveTeam"></edit-team-form>
  </base-layout>
</template>

<script>
import EditTeamForm from "../components/teams/EditTeamForm";

export default {
  components: {
    EditTeamForm,
  },
  methods: {
    saveTeam(teamData) {
      this.$store.dispatch("updateTeam", teamData);
      this.$router.replace("/teams");
    },
  },
  data() {
    return {
      teamId: this.$route.params.id,
    };
  },
  computed: {
    loadedTeam() {
      return this.$store.getters.getTeamById(this.teamId);
    },
  },
};
</script>