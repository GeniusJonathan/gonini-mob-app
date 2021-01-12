import axios from 'axios';
import {AppConstants} from '../../constants.js';

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
                .get(AppConstants.BASE_URL + 'api/teams')
                .then(res => context.commit('setTeams', res.data))
                .catch(err => console.log(err + ': Unable to retrieve teams'))
        },
    
        async addTeam(context, team) {
            await axios
                .post(AppConstants.BASE_URL + 'api/teams', team)
                .then(res => context.commit('newTeam', res.data))
                .catch(err => console.log(err + ': Unable to add new team'))
        },
    
        async updateTeam(context, team) {
            await axios
                .put(AppConstants.BASE_URL + `api/teams/${team.id}`, team)
                .then(res => context.commit('editTeam', res.data))
                .catch(error => console.log(error));
        },
    
        async deleteTeam(context, id) {
            await axios
            .delete(AppConstants.BASE_URL + `api/teams/${id}`)
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