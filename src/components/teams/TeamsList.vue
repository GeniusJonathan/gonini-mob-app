<template>
  <ion-list>
    <ion-item
      v-for="team in teams"
      :key="team.id"
    >
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button>
            <ion-icon slot="icon-only" :icon="logoDribbble"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>{{ team.name }}</ion-title>
        <ion-buttons slot="end">
          <ion-button :router-link="`/teams/${team.id}`">
            <ion-icon slot="icon-only" :icon="colorWandOutline"></ion-icon>
          </ion-button>
          <ion-button @click="presentAlert(team)">
            <ion-icon slot="icon-only" :icon="trashBinOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-item>
  </ion-list>
</template>

<script>
import {
  IonList,
  IonItem,
  // IonLabel,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  alertController 
} from "@ionic/vue";

import { colorWandOutline, trashBinOutline, logoDribbble } from "ionicons/icons";

export default {
  props: ["teams"],
  components: {
    IonList,
    IonItem,
    // IonLabel,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon
  },
  data() {
    return {
      colorWandOutline, trashBinOutline, logoDribbble
    }
  },
  methods: {
    async presentAlert(team) {
      const alert = await alertController
        .create({
          header: 'Are you sure?',
          message: `Remove <strong>${team.name}</strong>?`,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary'
            },
            {
              text: 'Okay',
              handler: () => {
                this.$store.dispatch("deleteTeam", team.id);
              },
            },
          ],
        });
      return alert.present();
    },
  }
};
</script>