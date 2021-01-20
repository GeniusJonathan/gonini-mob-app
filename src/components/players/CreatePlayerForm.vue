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
      <ion-item>
        <ion-thumbnail slot="start">
          <img :src="takenImageUrl" />
        </ion-thumbnail>
        <ion-button fill="clear" @click="takePhoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Take Photo
        </ion-button>
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
  IonThumbnail,
  IonIcon,
} from "@ionic/vue";

import { camera } from "ionicons/icons";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";

const { Camera } = Plugins;

export default {
  emits: ["save-player"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonThumbnail,
    IonIcon,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      takenImageUrl: null,
      camera,
      
    };
  },
  methods: {
    submitForm() {
      const playerData = {
        firstName: this.firstName,
        lastName: this.lastName,
        takenImageUrl: this.takenImageUrl
      };
      this.$emit("save-player", playerData);
      this.firstName = "";
      this.lastName = "";
    },
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 60,
      });
      this.takenImageUrl = photo.webPath;
    },
  },
};
</script>