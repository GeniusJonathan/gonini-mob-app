<template>
  <base-layout
    :page-title="loadedGame ? `${loadedGame.homeTeam.name} vs ${loadedGame.awayTeam.name}` : 'Loading...'"
    page-default-back-link="/games"
  >
    <h2 v-if="!loadedGame">Could not find a game for the given id.</h2>
    <game-overview v-else :loadedGame="loadedGame"></game-overview>
  </base-layout>
</template>

<script>
import GameOverview from "../components/games/GameOverview.vue";

export default {
  components: {
    GameOverview,
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
  // watch: {
  //   $route(currentRoute) {
  //     this.memoryId = currentRoute.params.id;
  //   },
  // },
};
</script>