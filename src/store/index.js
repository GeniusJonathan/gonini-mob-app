import { createStore } from 'vuex';
import {playersModule} from './modules/players.js'
import {gamesModule} from './modules/games.js'
import {teamsModule} from './modules/teams.js'
import {playersAvailabilityModule} from './modules/playersAvailability.js'

const store = createStore({
    modules: {
        players: playersModule,
        games: gamesModule,
        teams: teamsModule,
        playersAvailability: playersAvailabilityModule,
    }
  });

export default store
