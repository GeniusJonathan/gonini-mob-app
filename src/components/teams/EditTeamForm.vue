<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Name</ion-label>
        <ion-input type="text" required v-model="name" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Address</ion-label>
        <ion-input type="text" required v-model="address" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">City</ion-label>
        <ion-input type="text" required v-model="city" />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Postal Code</ion-label>
        <ion-input type="text" required v-model="postalCode" />
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
  emits: ["save-team"],  
  props: ["loadedTeam"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  data() {
    return {
      name: this.loadedTeam.name,
      address: this.loadedTeam.address,
      city: this.loadedTeam.city,
      postalCode: this.loadedTeam.postalCode
    }
  },
  methods: {
      submitForm() {
          const teamData = {
              id: this.loadedTeam.id,
              name: this.name,
              address: this.address,
              city: this.city,
              postalCode: this.postalCode
          }
          this.$emit("save-team", teamData);
          this.name = "";
          this.address = "";
          this.city = "";
          this.postalCode = "";
      }
  }
};
</script>