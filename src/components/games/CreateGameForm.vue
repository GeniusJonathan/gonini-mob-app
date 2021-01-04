<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="stacked">Opponent</ion-label>
        <ion-select v-model="opponent" interface="popover">
          <ion-select-option
            v-for="team in teams"
            :key="team.id"
            :value="team.id"
            >{{ team.name }}</ion-select-option
          >
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Game Type</ion-label>
        <ion-select v-model="gameType" interface="popover">
          <ion-select-option value="away">Away</ion-select-option>
          <ion-select-option value="home">Home</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Date</ion-label>
        <ion-datetime v-model="date" placeholder="Select Date"></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Time</ion-label>
        <ion-datetime
          v-model="time"
          placeholder="Select Time"
          display-format="HH:mm"
          picker-format="h:mm A"
        ></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Details</ion-label>
        <ion-input type="text" required v-model="details" />
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block">Save</ion-button>
  </form>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonDatetime,
} from "@ionic/vue";

export default {
  emits: ["save-game"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonDatetime,
  },
  data() {
    return {
      opponent: "",
      homeTeamId: "",
      awayTeamId: "",
      gameType: "",
      date: "",
      time: "",
      details: "",
    };
  },
  methods: {
    submitForm() {
      if (this.gameType === "home") {
        this.homeTeamId = 1;
        this.awayTeamId = this.opponent;
      } else if (this.gameType === "away") {
        this.homeTeamId = this.opponent;
        this.awayTeamId = 1;
      }
      const gameData = {
        homeTeamId: this.homeTeamId,
        awayTeamId: this.awayTeamId,
        date: new Date(this.date).toLocaleDateString("en-GB"),
        time: new Date(this.time).toLocaleTimeString("en-GB").substring(0, 5),
        details: this.details,
      };
      this.$emit("save-game", gameData);
      this.opponent = "";
      this.gameType = "";
      this.date = "";
      this.time = "";
      this.details = "";
    },
  },
  computed: {
    teams() {
      function compare(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }

      var list = this.$store.getters.allTeams;

      return list.filter((x) => x.name !== "Gonini").sort(compare);
    },
  },
  created() {
    this.$store.dispatch("fetchTeams");
  },
};
</script>