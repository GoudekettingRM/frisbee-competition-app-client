import {
  superAdmin,
  federation,
  clubBoard,
  spiritCaptain,
  teamCaptain,
  player
} from "./endpointRoles";

const rules = {
  [player]: {
    static: [
      "players:read",
      "teams:read",
      "teams:update-join",
      "competitions:read",
      "games:read"
    ],
    dynamic: {
      "players:update": ({ userId, playerId }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "players:delete": ({ userId, playerId }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      }
    }
  },
  [spiritCaptain]: {
    static: [
      "players:read",
      "teams:read",
      "teams:update-join",
      "competitions:read",
      "games:read"
    ],
    dynamic: {
      "players:update": ({ userId, playerId }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "players:delete": ({ userId, playerId }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "games:update-score": ({ homeTeamId, awayTeamId, userTeamId }) => {
        if (!homeTeamId || !awayTeamId || !userTeamId) return false;
        return homeTeamId === userTeamId || awayTeamId === userTeamId;
      },
      "games:update-home-team-spirit": ({
        homeTeamId,
        awayTeamId,
        userTeamId
      }) => {
        if (!homeTeamId || !awayTeamId || !userTeamId) return false;
        return awayTeamId === userTeamId;
      },
      "games:update-away-team-spirit": ({
        homeTeamId,
        awayTeamId,
        userTeamId
      }) => {
        if (!homeTeamId || !awayTeamId || !userTeamId) return false;
        return homeTeamId === userTeamId;
      }
    }
  },
  [teamCaptain]: {
    static: [
      "players:read",
      "teams:read",
      "teams:update-join",
      "competitions:read",
      "games:read"
    ],
    dynamic: {
      "players:update": ({ userId, playerId }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "players:delete": ({ userId, playerId }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "teams:update-(un)assign-captains": ({ teamId, userTeamId }) => {
        if (!teamId || !userTeamId) return false;
        return teamId === userTeamId;
      },
      "games:update-score": ({ homeTeamId, awayTeamId, userTeamId }) => {
        if (!homeTeamId || !awayTeamId || !userTeamId) return false;
        return homeTeamId === userTeamId || awayTeamId === userTeamId;
      },
      "games:update-home-team-spirit": ({
        homeTeamId,
        awayTeamId,
        userTeamId
      }) => {
        if (!homeTeamId || !awayTeamId || !userTeamId) return false;
        return awayTeamId === userTeamId;
      },
      "games:update-away-team-spirit": ({
        homeTeamId,
        awayTeamId,
        userTeamId
      }) => {
        if (!homeTeamId || !awayTeamId || !userTeamId) return false;
        return homeTeamId === userTeamId;
      }
    }
  },
  [clubBoard]: {
    static: [
      "players:read",
      "teams:read",
      "teams:create",
      "competitions:read",
      "competitions:update-add-team",
      "games:read"
    ],
    dynamic: {
      "players:update": ({ userId, playerId }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "players:delete": ({ userId, playerId }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "teams:update": ({ teamOrgansationId, organisationId }) => {
        if (!teamOrgansationId || !organisationId) return false;
        return teamOrgansationId === organisationId;
      },
      "teams:update-add-player": ({ team, organisation }) => {
        if (!team || !organisation) return false;
        return team.organisationId === organisation.id;
      },
      "teams:update-remove-player": ({ team, organisation }) => {
        if (!team || !organisation) return false;
        return team.organisationId === organisation.id;
      },
      "teams:update-(un)assign-captains": ({ team, organisation }) => {
        if (!team || !organisation) return false;
        return team.organisationId === organisation.id;
      },
      "teams:delete": ({ team, organisation }) => {
        if (!team || !organisation) return false;
        return team.organisationId === organisation.id;
      },
      "competitions:update-remove-team": ({ team, organisation }) => {
        if (!team || !organisation) return false;
        return team.organisationId === organisation.id;
      },
      "games:update-score": ({ homeTeam, awayTeam, user }) => {
        if (!homeTeam || !awayTeam || !user) return false;
        return (
          homeTeam.organisationId === user.organisationId ||
          awayTeam.organisationId === user.organisationId
        );
      },
      "games:update-home-team-spirit": ({ homeTeam, awayTeam, user }) => {
        if (!homeTeam || !awayTeam || !user) return false;
        return awayTeam.organisationId === user.organisationId;
      },
      "games:update-away-team-spirit": ({ homeTeam, awayTeam, user }) => {
        if (!homeTeam || !awayTeam || !user) return false;
        return homeTeam.organisationId === user.organisationId;
      }
    }
  },
  [federation]: {
    static: [
      "players:create",
      "players:read",
      "teams:read",
      "competitions:read",
      "games:read",
      "teams:update", //
      "teams:update-add-player", //
      "teams:update-remove-player", //
      "teams:update-(un)assign-captains", //
      "teams:delete", //
      "competitions:create", //
      "competitions:update", //
      "competitions:update-add-team", //
      "competitions:update-remove-team", //
      "competitions:delete", //
      "games:create", //
      "games:update", //
      "games:update-score", //
      "games:update-home-team-spirit", //
      "games:update-away-team-spirit", //
      "games:delete" //
    ],
    dynamic: {
      "teams:create": ({ organisationId, competitionOrganisationId }) => {
        if (!organisationId || !competitionOrganisationId) return false;
        return organisationId === competitionOrganisationId;
      }
      // "teams:update": ()=> {},
      // "teams:update-add-player": () => {},
      // "teams:update-remove-player": () => {},
      // "teams:update-(un)assign-captains": () => {},
      // "teams:delete": () => {},
      // "competitions:create": () => {},
      // "competitions:update": () => {},
      // "competitions:update-add-team": () => {},
      // "competitions:update-remove-team": () => {},
      // "competitions:delete": () => {},
      // "games:create": () => {},
      // "games:update": () => {},
      // "games:update-score": () => {},
      // "games:update-home-team-spirit": () => {},
      // "games:update-away-team-spirit": () => {},
      // "games:delete": () => {}
    }
  },
  [superAdmin]: {
    static: [
      "players:create",
      "players:read",
      "players:update",
      "players:delete",
      "teams:create",
      "teams:read",
      "teams:update",
      "teams:update-add-player",
      "teams:update-join",
      "teams:update-remove-player",
      "teams:update-(un)assign-captains",
      "teams:delete",
      "competitions:create",
      "competitions:read",
      "competitions:update",
      "competitions:update-add-team",
      "competitions:update-remove-team",
      "competitions:delete",
      "games:create",
      "games:read",
      "games:update",
      "games:update-score",
      "games:update-home-team-spirit",
      "games:update-away-team-spirit",
      "games:delete"
    ]
  }
};

export default rules;
