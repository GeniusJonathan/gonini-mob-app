<template>
  <base-layout
    page-title="Modify Player"
    page-default-back-link="/players"
  >
    <h2 v-if="!loadedPlayer">Could not find a player for the given id.</h2>
    <edit-player-form :loadedPlayer="loadedPlayer" @save-player="savePlayer"></edit-player-form>
  </base-layout>
</template>

<script>
import EditPlayerForm from "../components/players/EditPlayerForm";

export default {
  components: {
    EditPlayerForm,
  },
  methods: {
    savePlayer(playerData) {
      this.$store.dispatch("updatePlayer", playerData);
      this.$router.replace("/players");
    },
  },
  data() {
    return {
      playerId: this.$route.params.id,
    };
  },
  computed: {
    loadedPlayer() {
      return this.$store.getters.getPlayerById(this.playerId);
    },
  },
};
</script>