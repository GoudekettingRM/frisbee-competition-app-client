import {
  ADD_COMPETITION,
  SET_FETCHED_COMPETITIONS,
  SET_SELECTED_COMPETITION
} from "./actions";
import { ADD_TEAM_TO_COMPETITION } from "../team/actions";
import { ADD_GAME_TO_COMPETITION, UPDATE_GAME_DETAILS } from "../game/actions";
import { ADD_USER_TO_TEAM, REMOVE_USER_FROM_TEAM } from "../user/actions";

const initialState = {
  all: [],
  selected: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REMOVE_USER_FROM_TEAM: {
      console.log("REEEEEMMOOOOOOOVVEEEE!");

      return state;
    }
    case ADD_USER_TO_TEAM: {
      const allCompetitionsUpdated = state.all.map(competition => {
        if (competition.id === payload.competitionId) {
          if (competition.users.find(user => user.id === payload.user.id)) {
            const usersUpdated = competition.users.map(user =>
              user.id === payload.user.id ? payload.user : user
            );
            return { ...competition, users: usersUpdated };
          } else
            return {
              ...competition,
              users: [...competition.users, payload.user]
            };
        } else return competition;
      });
      const selectedCompetitionUsersUpdated = state.selected.teams.map(team => {
        if (team.id === payload.teamId) {
          return team.users &&
            team.users.find(user => user.id === payload.user.id)
            ? team.users.map(user => {
                if (user.id === payload.user.id) {
                  return payload.user;
                } else return user;
              })
            : team.users.concat(payload.user);
        } else return team;
      });

      return {
        ...state,
        all: allCompetitionsUpdated,
        selected: {
          ...state.selected,
          users: selectedCompetitionUsersUpdated
        }
      };
    }
    case UPDATE_GAME_DETAILS: {
      const allCompetitionsUpdated = state.all.map(competition => {
        if (competition.id === payload.competition.id) {
          const gamesUpdated = competition.games.map(game =>
            game.id === payload.id ? payload : game
          );
          return {
            ...competition,
            games: gamesUpdated
          };
        } else return competition;
      });
      const selectedCompetitionGamesUpdated = state.selected.games
        ? state.selected.games.map(game =>
            game.id === payload.id ? payload : game
          )
        : [];
      return {
        ...state,
        all: allCompetitionsUpdated,
        selected: {
          ...state.selected,
          games: selectedCompetitionGamesUpdated
        }
      };
    }
    case ADD_GAME_TO_COMPETITION: {
      const allCompetitionsUpdated = state.all.map(competition => {
        if (competition.id === state.selected.id) {
          return {
            ...competition,
            games: [...competition.games, payload]
          };
        } else return competition;
      });
      return {
        ...state,
        all: allCompetitionsUpdated,
        selected: {
          ...state.selected,
          games: [...state.selected.games, payload]
        }
      };
    }
    case ADD_TEAM_TO_COMPETITION: {
      const allCompetitionsUpdated = state.all.map(competition => {
        if (competition.id === state.selected.id) {
          return {
            ...competition,
            teams: [...competition.teams, payload]
          };
        } else return competition;
      });
      return {
        ...state,
        all: allCompetitionsUpdated,
        selected: {
          ...state.selected,
          teams: [...state.selected.teams, payload]
        }
      };
    }
    case SET_SELECTED_COMPETITION: {
      return {
        ...state,
        selected: { ...payload }
      };
    }
    case SET_FETCHED_COMPETITIONS: {
      return {
        ...state,
        all: [...payload]
      };
    }
    case ADD_COMPETITION:
      return {
        ...state,
        all: [...state.all, payload]
      };

    default:
      return state;
  }
};
