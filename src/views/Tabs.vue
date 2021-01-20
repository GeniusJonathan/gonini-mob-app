<template>
  <ion-page>
    <ion-tabs>
      
      <ion-tab-bar slot="bottom">

        <ion-tab-button tab="tab2" href="/players">
          <ion-icon :icon="peopleOutline" />
          <ion-label>Players</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab3" href="/teams">
          <ion-icon :icon="home" />
          <ion-label>Teams</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab4" href="/games">
          <ion-icon :icon="calendar" />
          <ion-label>Games</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab1" href="/more">
          <ion-icon :icon="menu" />
          <ion-label>More</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { home, calendar, peopleOutline, menu } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      home,
      calendar, 
      peopleOutline, 
      menu,
    }
  }
}
</script>