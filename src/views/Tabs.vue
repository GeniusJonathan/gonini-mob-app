<template>
  <ion-page>
    <ion-tabs>
      

      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="tab1" href="/tabs/tab3">
          <ion-icon :icon="menu" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab1">
          <ion-icon :icon="peopleOutline" />
          <ion-label>Players</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab3" href="/tabs/tab2">
          <ion-icon :icon="home" />
          <ion-label>Teams</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab4" href="/tabs/tab3">
          <ion-icon :icon="logoDribbble" />
          <ion-label>Games</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { home, logoDribbble, peopleOutline, menu } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      home,
      logoDribbble, 
      peopleOutline, 
      menu,
    }
  }
}
</script>