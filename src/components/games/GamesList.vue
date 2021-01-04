<template>
  <ion-list>
    <ion-item
      v-for="game in games"
      :key="game.id"
    >
      
      <ion-toolbar>
        <div id="dateBadge">{{game.date}}</div>
        <ion-title>
          <span v-if="isHomeGame(game)">vs</span>
          <span v-else>@</span>
          {{ displayOpponent(game)}} </ion-title>
        <ion-buttons slot="end">
          <ion-button :router-link="`/games/view/${game.id}`">
            <ion-icon slot="icon-only" :icon="eyeOutline"></ion-icon>
          </ion-button>
          <ion-button :router-link="`/games/edit/${game.id}`">
            <ion-icon slot="icon-only" :icon="colorWandOutline"></ion-icon>
          </ion-button>
          <ion-button @click="presentAlert(game)">
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

import { colorWandOutline, trashBinOutline, eyeOutline } from "ionicons/icons";

export default {
  props: ["games"],
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
      colorWandOutline, trashBinOutline, eyeOutline
    }
  },
  methods: {
    async presentAlert(game) {
      const alert = await alertController
        .create({
          header: 'Are you sure?',
          message: `Remove <strong>${game.homeTeam.name} - ${game.awayTeam.name}</strong>?`,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary'
            },
            {
              text: 'Okay',
              handler: () => {
                this.$store.dispatch("deleteGame", game.id);
              },
            },
          ],
        });
      return alert.present();
    },
    displayOpponent(game) {
      if (this.isHomeGame(game)) {
        return `${game.awayTeam.name}`;
      } else {
        return `${game.homeTeam.name}`;
      }
    },
    isHomeGame(game) {
      return game.homeTeam.name === "Gonini";
    }
  },
};
</script>

<style>
 #dateBadge {
   font-size: 60%;
   font-weight: bold;
   color: var(--ion-color-primary);
 }

 span {
   font-size: 60%;
 }


</style>