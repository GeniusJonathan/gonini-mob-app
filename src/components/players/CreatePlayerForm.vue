<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">First Name</ion-label>
        <ion-input type="text" required v-model="firstName" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Last Name</ion-label>
        <ion-input type="text" required v-model="lastName" />
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
} from "@ionic/vue";

export default {
  emits: ["save-player"],  
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  data() {
      return {
          firstName: "",
          lastName: ""
      }
  },
  methods: {
      submitForm() {
          const playerData = {
              firstName: this.firstName,
              lastName: this.lastName
          }
          this.$emit("save-player", playerData);
          this.firstName = "";
          this.lastName = "";
      }
  }
};
</script>