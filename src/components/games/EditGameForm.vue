<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="stacked">Home Team</ion-label>
        <ion-select
          v-model="homeTeamId"
          :value="homeTeamId"
          interface="popover"
        >
          <ion-select-option
            v-for="team in teams"
            :key="team.id"
            :value="team.id"
            >{{ team.name }}</ion-select-option
          >
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Away Team</ion-label>
        <ion-select
          v-model="awayTeamId"
          :value="awayTeamId"
          interface="popover"
        >
          <ion-select-option
            v-for="team in teams"
            :key="team.id"
            :value="team.id"
            >{{ team.name }}</ion-select-option
          >
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Date</ion-label>
        <ion-datetime
          v-model="date"
          placeholder="Select Date"
        ></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Time</ion-label>
        <ion-datetime
          v-model="time"
          placeholder="Select Time"
          display-format="HH:mm"
          picker-format="h:mm A"
          :value="time"
        ></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Details</ion-label>
        <ion-input type="text" required v-model="details" />
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Score</ion-label>
        <ion-input type="text" required v-model="score" />
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Is Won?</ion-label>
        <ion-select v-model="isWonTextValue" interface="popover">
          <ion-select-option value="yes">Yes</ion-select-option>
          <ion-select-option value="no">No</ion-select-option>
        </ion-select>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";

export default {
  emits: ["save-game"],
  props: ["loadedGame"],
  components: {
    IonList,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  data() {
    return {
      homeTeamId: this.loadedGame.homeTeam.id,
      awayTeamId: this.loadedGame.awayTeam.id,
      gameType: this.loadedGame.gameType,
      date: this.convertDateString(this.loadedGame.date),
      time: this.loadedGame.time,
      details: this.loadedGame.details,
      score: this.loadedGame.score,
      isWon: this.loadedGame.isWon,
      isWonTextValue: this.convertBooleanToText(this.loadedGame.isWon)
    };
  },
  methods: {
    submitForm() {
      console.log(this.time);
      console.log(new Date(this.time));
      console.log( new Date(this.time).toLocaleTimeString("en-GB").substring(0, 5));

      const gameData = {
        id: this.loadedGame.id,
        homeTeamId: this.homeTeamId,
        awayTeamId: this.awayTeamId,
        date: new Date(this.date).toLocaleDateString("en-GB"),
        time: this.time,
        details: this.details,
        score: this.score,
        isWon: this.convertTextToBoolean(this.isWonTextValue)
      };
      this.$emit("save-game", gameData);
      this.opponent = "";
      this.gameType = "";
      this.date = "";
      this.time = "";
      this.details = "";
      this.score = "";
    },
    convertDateString(dateString) {
      var dateParts = dateString.split("/");
      var dateObject = dateParts[2] + "-" + dateParts[1] + "-" + (dateParts[0]);
      console.log(dateObject)
      return dateObject;
    },
    convertBooleanToText(booleanValue) {
      var returnValue = booleanValue ? "yes": "no";
      return returnValue;
    },
    convertTextToBoolean(textValue) {
      return textValue === "yes";
    }
  },
  computed: {
    teams() {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }

      var list = this.$store.getters.allTeams;

      return list.sort(compare);
    },
  },
  created() {
    this.$store.dispatch("fetchTeams");
  },
};
</script>