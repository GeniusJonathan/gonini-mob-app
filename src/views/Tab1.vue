<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <h2>Hello World</h2>
      <ul>
        <li v-for="mem in memories" :key="mem.id">{{mem.firstName}}</li>
      </ul>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  computed: {
    memories() {
      return this.$store.getters.allPlayers;
    },
  },
  created() {
    this.$store.dispatch('fetchPlayers');
  },
}
</script>