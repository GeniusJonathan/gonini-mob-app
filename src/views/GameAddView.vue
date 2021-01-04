<template>
  <base-layout page-title="Add new game" page-default-back-link="/games">
    <create-game-form @save-game="saveGame"></create-game-form>
  </base-layout>
</template>

<script>
import CreateGameForm from "../components/games/CreateGameForm";

export default {
  components: {
    CreateGameForm,
  },
  methods: {
    saveGame(gameData) {
      this.$store.dispatch("addGame", gameData);
      this.$router.replace("/games");
    },
  },
};
</script>