import axios from 'axios';

 export const teamsModule = {
    state() {
        return {
            teams: []
        }
    },
    mutations: { 
        setTeams(state, teams) {
            state.teams = teams;
        },
        newTeam(state, team) { 
            state.teams.push(team)
        },
        editTeam(state, team) {
            const index = state.teams.findIndex(p => p.id === team.id);
            if (index !== -1)
                state.teams.splice(index, 1, team)
        },
        removeTeam(state, id) {
            state.teams = state.teams.filter(x => x.id !== id)
        }
    },
    actions: { 
        async fetchTeams(context) {
            await axios
                .get('http://localhost:8080/api/teams')
                .then(res => context.commit('setTeams', res.data))
                .catch(err => console.log(err + ': Unable to retrieve teams'))
        },
    
        async addTeam(context, team) {
            await axios
                .post('http://localhost:8080/api/teams', team)
                .then(res => context.commit('newTeam', res.data))
                .catch(err => console.log(err + ': Unable to add new team'))
        },
    
        async updateTeam(context, team) {
            await axios
                .put(`http://localhost:8080/api/teams/${team.id}`, team)
                .then(res => context.commit('editTeam', res.data))
                .catch(error => console.log(error));
        },
    
        async deleteTeam(context, id) {
            await axios
            .delete(`http://localhost:8080/api/teams/${id}`)
            .then(() => context.commit('removeTeam', id))
            .catch(error => console.log(error));
        }
    },
    getters: { 
        allTeams(state) {
            return state.teams;
        },
        getTeamById(state) {
            return (id) => {
              return state.teams.find(team => team.id == id);
            };
          },
    }
}