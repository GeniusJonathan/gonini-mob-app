import { createStore } from 'vuex';
import {playersModule} from './modules/players.js'
import {teamsModule} from './modules/teams.js'

const store = createStore({
    modules: {
        players: playersModule,
        teams: teamsModule
    }
  });

export default store
