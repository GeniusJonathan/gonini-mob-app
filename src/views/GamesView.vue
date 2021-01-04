<template>
  <base-layout page-title="Games Schedule">
    <template v-slot:actions-end>
      <ion-button router-link="/games/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <games-list :games="games"></games-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

import GamesList from "../components/games/GamesList";

export default {
  name: "GamesView",
  components: {
    GamesList,
    IonButton,
    IonIcon,
  },
  data() {
    return { add };
  },
  computed: {
    games() {
      function compare(a, b) {
        if (a.id < b.id)
          return -1;
        if (a.id > b.id)
          return 1;
        return 0;
      }

      var list = this.$store.getters.allGames

      return list.sort(compare);
    },
  },
  created() {
    this.$store.dispatch("fetchGames");
  },
};
</script>