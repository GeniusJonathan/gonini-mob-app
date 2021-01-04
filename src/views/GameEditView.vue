<template>
  <base-layout
    page-title="Modify Game"
    page-default-back-link="/games"
  >
    <h2 v-if="!loadedGame">Could not find a game for the given id.</h2>
    <edit-game-form :loadedGame="loadedGame" @save-game="saveGame"></edit-game-form>
  </base-layout>
</template>

<script>
import EditGameForm from "../components/games/EditGameForm";

export default {
  components: {
    EditGameForm,
  },
  methods: {
    saveGame(gameData) {
      this.$store.dispatch("updateGame", gameData);
      this.$router.replace("/games");
    },
  },
  data() {
    return {
      gameId: this.$route.params.id,
    };
  },
  computed: {
    loadedGame() {
      return this.$store.getters.getGameById(this.gameId);
    },
  },
};
</script>