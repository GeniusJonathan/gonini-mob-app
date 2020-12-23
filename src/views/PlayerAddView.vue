<template>
  <base-layout page-title="Add new player" page-default-back-link="/players">
    <create-player-form @save-player="savePlayer"></create-player-form>
  </base-layout>
</template>

<script>
import CreatePlayerForm from "../components/players/CreatePlayerForm";

export default {
  components: {
    CreatePlayerForm,
  },
  methods: {
    savePlayer(playerData) {
      this.$store.dispatch("addPlayer", playerData);
      this.$router.replace("/players");
    },
  },
};
</script>