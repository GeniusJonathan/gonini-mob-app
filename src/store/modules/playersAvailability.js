import axios from 'axios';

 export const playersAvailabilityModule = {
    state() {
        return {
            playersAvailabilitys: []
        }
    },
    mutations: { 
        setPlayersAvailabilitys(state, playersAvailabilitys) {
            state.playersAvailabilitys = playersAvailabilitys;
        },
        editPlayersAvailability(state, playerAvailability) {
            const index = state.playersAvailabilitys.findIndex(p => p.id === playerAvailability.id);
            if (index !== -1)
                state.playersAvailabilitys.splice(index, 1, playerAvailability)
        },
    },
    actions: { 
        async fetchPlayersAvailability(context, gameId) {
            await axios
                .get(`http://localhost:8080/api/games/${gameId}/players`)
                .then(res => context.commit('setPlayersAvailabilitys', res.data))
                .catch(err => console.log(err + ': Unable to retrieve playersAvailabilitys'))
        },
    
        async updatePlayersAvailability(context, playerAvailability) {
            var availability = {
                status: playerAvailability.status
            };
            await axios
                .put(`http://localhost:8080/api/games/${playerAvailability.game.id}/players/${playerAvailability.player.id}`, availability)
                .then(res => context.commit('editPlayersAvailability', res.data))
                .catch(error => console.log(error));
        },
    },
    getters: { 
        allPlayersAvailability(state) {
            return state.playersAvailabilitys;
        },
        getPlayersAvailabilityById(state) {
            return (id) => {
              return state.playersAvailabilitys.find(playersAvailability => playersAvailability.id == id);
            };
          },
    }
}