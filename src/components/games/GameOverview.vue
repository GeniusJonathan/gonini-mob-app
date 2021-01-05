<template>
  <ion-list>
    <ion-list-header>
      <h2>Game Details</h2>
    </ion-list-header>
    <ion-item>
      <ion-label>Home Team</ion-label>
      <ion-note slot="end">{{ this.homeTeam }}</ion-note>
    </ion-item>
    <ion-item>
      <ion-label>Away Team</ion-label>
      <ion-note slot="end">{{ this.awayTeam }}</ion-note>
    </ion-item>
    <ion-item>
      <ion-label>Date</ion-label>
      <ion-note slot="end">{{ this.date }}</ion-note>
    </ion-item>
    <ion-item>
      <ion-label>Time</ion-label>
      <ion-note slot="end">{{ this.time }}</ion-note>
    </ion-item>
    <ion-item>
      <ion-label>Details</ion-label>
      <ion-note slot="end">{{ this.details }}</ion-note>
    </ion-item>
    <ion-item>
      <ion-label>Score</ion-label>
      <ion-note
        slot="end"
        :class="{
          green: this.loadedGame.isWon,
          red: this.isPlayed() && !this.loadedGame.isWon,
        }"
        >{{ this.showScore() }}</ion-note
      >
    </ion-item>
  </ion-list>
  <ion-list v-if="this.playersAvailability">
    <ion-list-header>
      <h2>Player Availability</h2>
    </ion-list-header>
    <ion-item v-for="availability in this.playersAvailability" :key="availability.id">
      {{availability.player.firstName}} {{availability.player.lastName}}
      <ion-note slot="end">
        <ion-button expand="block" @click="handleButtonClick(availability)">{{ availability.status }}</ion-button>
      </ion-note>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonList, IonListHeader, IonItem, IonLabel, IonNote, IonButton, actionSheetController } from "@ionic/vue";

export default {
  props: ["loadedGame"],
  components: {
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonNote,
    IonButton
  },
  data() {
    return {
      homeTeam: this.loadedGame.homeTeam.name,
      awayTeam: this.loadedGame.awayTeam.name,
      date: this.loadedGame.date,
      time: this.loadedGame.time,
      details: this.loadedGame.details,
      game_id : this.gameId
    };
  },
  methods: {
    isPlayed() {
      return this.loadedGame.score !== "00 - 00";
    },
    showScore() {
      if (this.isPlayed()) {
        if (this.loadedGame.isWon) {
          return `W ${this.loadedGame.score}`;
        } else {
          return `L ${this.loadedGame.score}`;
        }
      } else {
        return this.loadedGame.score;
      }
    },
    async handleButtonClick(player) {
      console.log(player);
      const actionSheet = await actionSheetController.create({
        header: 'Modify Availability',
        buttons: [
          { text: 'Unknown',
            handler: () => {
              player.status = "UNKNOWN"
              this.$store.dispatch("updatePlayersAvailability", player);
            }, 
          },
          { text: 'Maybe',
            handler: () => {
              player.status = "MAYBE"
              this.$store.dispatch("updatePlayersAvailability", player);
            }
          },
          { text: "Can't Go",
            handler: () => {
              player.status = "UNAVAILABLE"
              this.$store.dispatch("updatePlayersAvailability", player);
            }
          },
          { text: 'Going',
            handler: () => {
              player.status = "AVAILABLE"
              this.$store.dispatch("updatePlayersAvailability", player);
            }
          },
          { text: 'Cancel', role: 'cancel' }
        ]
      });
      await actionSheet.present();
      console.log(actionSheet);
    },
    
  },
  computed: {
    playersAvailability() {
      return this.$store.getters.allPlayersAvailability;
    },
  },
  beforeCreate() {
    this.$store.dispatch("fetchPlayersAvailability", this.loadedGame.id);
  },
};
</script>

