<template>
  <ion-list>
    <ion-item
      v-for="player in players"
      :key="player.id"
    >
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button>
            <ion-icon slot="icon-only" :icon="person"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>{{ player.firstName }} {{ player.lastName }}</ion-title>
        <ion-buttons slot="end">
          <ion-button :router-link="`/players/${player.id}`">
            <ion-icon slot="icon-only" :icon="colorWandOutline"></ion-icon>
          </ion-button>
          <ion-button @click="presentAlert(player)">
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

import { colorWandOutline, trashBinOutline, person } from "ionicons/icons";

export default {
  props: ["players"],
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
      colorWandOutline, trashBinOutline, person
    }
  },
  methods: {
    async presentAlert(player) {
      const alert = await alertController
        .create({
          header: 'Are you sure?',
          message: `Remove <strong>${player.firstName} ${player.lastName}</strong>?`,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary'
            },
            {
              text: 'Okay',
              handler: () => {
                this.$store.dispatch("deletePlayer", player.id);
              },
            },
          ],
        });
      return alert.present();
    },
  }
};
</script>