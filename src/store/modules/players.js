import axios from 'axios';

 export const playersModule = {
    state() {
        return {
            players: []
        }
    },
    mutations: { 
        setPlayers(state, players) {
            state.players = players;
        },
        newPlayer(state, player) { 
            state.players.unshift(player)
        },
        editPlayer(state, player) {
            const index = state.players.findIndex(p => p.id === player.id);
            if (index !== -1)
                state.players.splice(index, 1, player)
        },
        removePlayer(state, id) {
            state.players = state.players.filter(x => x.id !== id)
        }
    },
    actions: { 
        async fetchPlayers(context) {
            await axios
                .get('http://localhost:8080/api/players')
                .then(res => context.commit('setPlayers', res.data))
                .catch(err => console.log(err + ': Unable to retrieve players'))
        },
    
        async addPlayer(context, player) {
            await axios
                .post('http://localhost:8080/api/players', player)
                .then(res => context.commit('newPlayer', res.data))
                .catch(err => console.log(err + ': Unable to add new player'))
        },
    
        async updatePlayer(context, player) {
            await axios
                .put(`http://localhost:8080/api/players/${player.id}`, player)
                .then(res => context.commit('editPlayer', res.data))
                .catch(error => console.log(error));
        },
    
        async deletePlayer(context, id) {
            await axios
            .delete(`http://localhost:8080/api/players/${id}`)
            .then(() => context.commit('removePlayer', id))
            .catch(error => console.log(error));
        }
    },
    getters: { 
        allPlayers(state) {
            return state.players;
        }
    }
}