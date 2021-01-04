import { createStore } from 'vuex';
import {playersModule} from './modules/players.js'
import {gamesModule} from './modules/games.js'
import {teamsModule} from './modules/teams.js'

const store = createStore({
    modules: {
        players: playersModule,
        games: gamesModule,
        teams: teamsModule
    }
  });

export default store
