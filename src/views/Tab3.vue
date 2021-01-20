<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Tab 3 page" />
      <ion-button @click="openCalendar">Open Calendar</ion-button>
      <ion-button @click="createEvent">Create Event</ion-button>
      <ion-button @click="createEventInteractively">Create Event Interactively</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import { Calendar } from "@ionic-native/calendar";

const Cal = Calendar;

export default {
  name: "Tab3",
  components: {
    ExploreContainer,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
  },
  methods: {
    createEvent() {
      var startDate = new Date(2021, 0, 21, 18, 30, 0, 0, 0); // beware: month 0 = january, 11 = december
      var endDate = new Date(2021, 0, 21, 19, 30, 0, 0, 0);
      // var title = "My nice event";
      var eventLocation = "Home";
      var notes = "Some notes about this event.";
      var success = function (message) {
        alert("Success: " + JSON.stringify(message));
      };
      var error = function (message) {
        alert("Error: " + message);
      };
      Cal.createEvent(
        "New Ionic Event",
        eventLocation,
        notes,
        startDate,
        endDate,
        success,
        error
      );
      // Cal.createEventInteractively(title,eventLocation,notes,startDate,endDate,success,error);
      //
    },
    openCalendar() {
      Cal.openCalendar();
    },
    createEventInteractively() {
      var startDate = new Date(2021, 0, 21, 18, 30, 0, 0, 0); // beware: month 0 = january, 11 = december
      var endDate = new Date(2021, 0, 21, 19, 30, 0, 0, 0);
      var title = "My nice event";
      var eventLocation = "Home";
      var notes = "Some notes about this event.";
      var success = function (message) {
        alert("Success: " + JSON.stringify(message));
      };
      var error = function (message) {
        alert("Error: " + message);
      };
      Cal.createEventInteractively(title,eventLocation,notes,startDate,endDate,success,error);
    }
  },
};
</script>