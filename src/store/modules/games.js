import axios from 'axios';
import { AppConstants} from '../../constants.js';

 export const gamesModule = {
    state() {
        return {
            games: []
        }
    },
    mutations: { 
        setGames(state, games) {
            state.games = games;
        },
        newGame(state, game) { 
            state.games.push(game)
        },
        editGame(state, game) {
            const index = state.games.findIndex(p => p.id === game.id);
            if (index !== -1)
                state.games.splice(index, 1, game)
        },
        removeGame(state, id) {
            state.games = state.games.filter(x => x.id !== id)
        }
    },
    actions: { 
        async fetchGames(context) {
            await axios
                .get(AppConstants.BASE_URL + 'api/games')
                .then(res => context.commit('setGames', res.data))
                .catch(err => console.log(err + ': Unable to retrieve games'))
        },
    
        async addGame(context, game) {
            await axios
                .post(AppConstants.BASE_URL + 'api/games', game)
                .then(res => context.commit('newGame', res.data))
                .catch(err => console.log(err + ': Unable to add new game'))
        },
    
        async updateGame(context, game) {
            await axios
                .put(AppConstants.BASE_URL + `api/games/${game.id}`, game)
                .then(res => context.commit('editGame', res.data))
                .catch(error => console.log(error));
        },
    
        async deleteGame(context, id) {
            await axios
            .delete(AppConstants.BASE_URL + `api/games/${id}`)
            .then(() => context.commit('removeGame', id))
            .catch(error => console.log(error));
        }
    },
    getters: { 
        allGames(state) {
            return state.games;
        },
        getGameById(state) {
            return (id) => {
              return state.games.find(game => game.id == id);
            };
          },
    }
}