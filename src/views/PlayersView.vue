<template>
  <base-layout page-title="Team Roster">
    <template v-slot:actions-end>
      <ion-button router-link="/players/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <players-list :players="players"></players-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

import PlayersList from "../components/players/PlayersList.vue";

export default {
  name: "PlayersView",
  components: {
    PlayersList,
    IonButton,
    IonIcon,
  },
  data() {
    return { add };
  },
  computed: {
    players() {
      function compare(a, b) {
        if (a.firstName < b.firstName)
          return -1;
        if (a.firstName > b.firstName)
          return 1;
        return 0;
      }

      var list = this.$store.getters.allPlayers

      return list.sort(compare);
    },
  },
  created() {
    this.$store.dispatch("fetchPlayers");
  },
};
</script>