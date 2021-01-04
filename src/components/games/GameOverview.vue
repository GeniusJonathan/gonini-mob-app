<template>
    <ion-list>
      <ion-list-header>
          <h2>Game Details</h2>
      </ion-list-header>
      <ion-item>
        <ion-label>Home Team</ion-label>
        <ion-note slot="end">{{this.homeTeam}}</ion-note>
      </ion-item>
      <ion-item>
        <ion-label>Away Team</ion-label>
        <ion-note slot="end">{{this.awayTeam}}</ion-note>
      </ion-item>
      <ion-item>
        <ion-label>Date</ion-label>
        <ion-note slot="end">{{this.date}}</ion-note>
      </ion-item>
      <ion-item>
        <ion-label>Time</ion-label>
        <ion-note slot="end">{{this.time}}</ion-note>
      </ion-item>
      <ion-item>
        <ion-label>Details</ion-label>
        <ion-note slot="end">{{this.details}}</ion-note>
      </ion-item>
      <ion-item>
        <ion-label>Score</ion-label>
        <ion-note slot="end" :class="{ 'green': this.loadedGame.isWon, 'red': this.isPlayed() && !this.loadedGame.isWon }">{{this.showScore()}}</ion-note>
      </ion-item>
    </ion-list>
</template>

<script>
import {
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonNote,
} from "@ionic/vue";

export default {
  props: ["loadedGame"],
  components: {
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonNote,
  },
  data() {
    return {
      homeTeam: this.loadedGame.homeTeam.name,
      awayTeam: this.loadedGame.awayTeam.name,
      date: this.loadedGame.date,
      time: this.loadedGame.time,
      details: this.loadedGame.details,
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
          return `L ${this.loadedGame.score}`
        }
      } else {
        return this.loadedGame.score
      }
    }
  }
}
</script>