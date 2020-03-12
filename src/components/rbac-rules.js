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
      "games:update-score": ({ homeTeam, awayTeam, user }) => {
        if (!homeTeam || !awayTeam || !user) return false;
        return homeTeam.id === user.teamId || awayTeam.id === user.teamId;
      },
      "games:update-spirit-score": ({
        homeOrAway,
        homeTeam,
        awayTeam,
        user
      }) => {
        if (!homeTeam || !awayTeam || !user) return false;
        if (homeOrAway === "home") return awayTeam.id === user.teamId;
        if (homeOrAway === "away") return homeTeam.id === user.teamId;
        return false;
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
      "games:update-score": ({ homeTeam, awayTeam, user }) => {
        if (!homeTeam || !awayTeam || !user) return false;
        return homeTeam.id === user.teamId || awayTeam.id === user.teamId;
      },
      "games:update-spirit-score": ({
        homeOrAway,
        homeTeam,
        awayTeam,
        user
      }) => {
        if (!homeTeam || !awayTeam || !user) return false;
        if (homeOrAway === "home") return awayTeam.id === user.teamId;
        if (homeOrAway === "away") return homeTeam.id === user.teamId;
        return false;
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
      "games:update-spirit-score": ({
        homeOrAway,
        homeTeam,
        awayTeam,
        user
      }) => {
        if (!homeTeam || !awayTeam || !user) return false;
        if (homeOrAway === "home")
          return awayTeam.organisationId === user.organisationId;
        if (homeOrAway === "away")
          return homeTeam.organisationId === user.organisationId;
        return false;
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
      "competitions:create",
      "teams:update", //
      "teams:update-add-player", //
      "teams:update-remove-player", //
      "teams:update-(un)assign-captains", //
      "teams:delete", //
      "competitions:update", //
      "competitions:update-add-team", //
      "competitions:update-remove-team", //
      "competitions:delete", //
      "games:create", //
      "games:update", //
      "games:update-score", //
      "games:update-spirit-score", //
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
      // "games:update-spirit-score": () => {}
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
      "games:update-spirit-score",
      "games:delete"
    ]
  }
};

export default rules;
