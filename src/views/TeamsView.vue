<template>
  <base-layout page-title="Teams">
    <template v-slot:actions-end>
      <ion-button router-link="/teams/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <teams-list :teams="teams"></teams-list>
  </base-layout>
</template>

<script>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";

import TeamsList from "../components/teams/TeamsList";

export default {
  name: "TeamsView",
  components: {
    TeamsList,
    IonButton,
    IonIcon,
  },
  data() {
    return { add };
  },
  computed: {
    teams() {
      function compare(a, b) {
        if (a.name < b.name)
          return -1;
        if (a.name > b.name)
          return 1;
        return 0;
      }

      var list = this.$store.getters.allTeams

      return list.sort(compare);
    },
  },
  created() {
    this.$store.dispatch("fetchTeams");
  },
};
</script>