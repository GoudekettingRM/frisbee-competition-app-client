(this["webpackJsonpfrisbee-competition-client"] = this["webpackJsonpfrisbee-competition-client"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Home/competitionCard.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Home/competitionCard.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".competitionCard {\n  width: 300px;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 30px auto;\n  padding: 10px 20px;\n  box-shadow: 0px 6px 10px 5px rgba(140, 140, 140, 1);\n  text-decoration: none;\n  color: black;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Login_out_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Login-out/Login */ "./src/components/Login-out/Login.jsx");
/* harmony import */ var _components_Home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Home/Home */ "./src/components/Home/Home.jsx");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header/Header */ "./src/components/Header/Header.jsx");
/* harmony import */ var _components_SignUp_SignUpPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SignUp/SignUpPlayer */ "./src/components/SignUp/SignUpPlayer.jsx");
/* harmony import */ var _components_Login_out_Logout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Login-out/Logout */ "./src/components/Login-out/Logout.jsx");
/* harmony import */ var _components_CreateOrganisation_CreateOrganisation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CreateOrganisation/CreateOrganisation */ "./src/components/CreateOrganisation/CreateOrganisation.jsx");
/* harmony import */ var _components_Profile_ProfilePage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Profile/ProfilePage */ "./src/components/Profile/ProfilePage.jsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_CreateCompetition_CreateCompetition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/CreateCompetition/CreateCompetition */ "./src/components/CreateCompetition/CreateCompetition.jsx");
/* harmony import */ var _components_CompetitionDetails_CompetitionDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/CompetitionDetails/CompetitionDetails */ "./src/components/CompetitionDetails/CompetitionDetails.jsx");
/* harmony import */ var _components_Games_AddGame__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Games/AddGame */ "./src/components/Games/AddGame.jsx");
/* harmony import */ var _components_Header_NavBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Header/NavBar */ "./src/components/Header/NavBar.jsx");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/App.js";















function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_NavBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    component: _components_Home_Home__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/login",
    exact: true,
    component: _components_Login_out_Login__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/logout",
    exact: true,
    component: _components_Login_out_Logout__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/signup",
    exact: true,
    component: _components_SignUp_SignUpPlayer__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/create-organisation",
    exact: true,
    component: _components_CreateOrganisation_CreateOrganisation__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/profile",
    exact: true,
    component: _components_Profile_ProfilePage__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/create-competition",
    exact: true,
    component: _components_CreateCompetition_CreateCompetition__WEBPACK_IMPORTED_MODULE_10__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/competitions/:competitionId",
    exact: true,
    component: _components_CompetitionDetails_CompetitionDetails__WEBPACK_IMPORTED_MODULE_11__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/competitions/:competitionId/create-game",
    exact: true,
    component: _components_Games_AddGame__WEBPACK_IMPORTED_MODULE_12__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/*! exports provided: baseUrl, authHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authHeader", function() { return authHeader; });
const baseUrl = "http://localhost:4000";
function authHeader(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
}

/***/ }),

/***/ "./src/components/Can.js":
/*!*******************************!*\
  !*** ./src/components/Can.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rbac_rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rbac-rules */ "./src/components/rbac-rules.js");


const check = (rules, roleId, action, data) => {
  const permissions = rules[roleId];

  if (!permissions) {
    // role is not present in the rules
    console.log("Role not present in rules.");
    return false;
  }

  const staticPermissions = permissions.static;
  const dynamicPermissions = permissions.dynamic;

  if (staticPermissions && staticPermissions.includes(action)) {
    return true;
  } else if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions[action];

    if (!permissionCondition) {
      // dynamic rule not provided for action
      console.log("Dynamic rule not provided for action");
      return false;
    }

    return permissionCondition(data);
  } else {
    // static rule not provided for action
    console.log("Static rule not provided for action");
    return false;
  }
};

const Can = props => {
  // console.log("Props of can test:", props);
  return check(_rbac_rules__WEBPACK_IMPORTED_MODULE_0__["default"], props.roleId, props.perform, props.data) ? props.yes() : props.no();
};

Can.defaultProps = {
  yes: () => null,
  no: () => null
};
/* harmony default export */ __webpack_exports__["default"] = (Can);

/***/ }),

/***/ "./src/components/CompetitionDetails/AddTeamForm.jsx":
/*!***********************************************************!*\
  !*** ./src/components/CompetitionDetails/AddTeamForm.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_team_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/team/actions */ "./src/store/team/actions.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/CompetitionDetails/AddTeamForm.jsx";




class AddTeamForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      name: ""
    };

    this.onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.onSubmit = event => {
      event.preventDefault();
      const {
        name
      } = this.state;
      const {
        organisationId,
        competitionId,
        token
      } = this.props;
      this.props.addTeam(name, organisationId, competitionId, token);
      this.props.toggleForm();
      this.setState({
        name: ""
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Register a team for ", this.props.selectedCompetition.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "name",
      placeholder: "Enter team name",
      value: this.state.name,
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Register"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: () => {
        this.props.toggleForm();
        this.setState({
          name: ""
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Cancel"));
  }

}

const mapStateToProps = state => ({
  token: state.session.jwt,
  selectedCompetition: state.competitions.selected
});

const mapDispatchToProps = {
  addTeam: _store_team_actions__WEBPACK_IMPORTED_MODULE_2__["addTeam"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AddTeamForm));

/***/ }),

/***/ "./src/components/CompetitionDetails/CompetitionDayCard.jsx":
/*!******************************************************************!*\
  !*** ./src/components/CompetitionDetails/CompetitionDayCard.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CompetitionDayCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/CompetitionDetails/CompetitionDayCard.jsx";

function CompetitionDayCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Competition Day ", props.id, ": ", props.day.date);
}

/***/ }),

/***/ "./src/components/CompetitionDetails/CompetitionDetails.jsx":
/*!******************************************************************!*\
  !*** ./src/components/CompetitionDetails/CompetitionDetails.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CompetitionDayCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompetitionDayCard */ "./src/components/CompetitionDetails/CompetitionDayCard.jsx");
/* harmony import */ var _AddTeamForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddTeamForm */ "./src/components/CompetitionDetails/AddTeamForm.jsx");
/* harmony import */ var _Can__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Can */ "./src/components/Can.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store_competition_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/competition/actions */ "./src/store/competition/actions.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/CompetitionDetails/CompetitionDetails.jsx";








class CompetitionDetails extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      showForm: false
    };

    this.componentDidMount = () => {
      if (!Object.keys(this.props.competition).length) {
        this.props.getOneCompetition(this.props.match.params.competitionId);
      }
    };

    this.toggleForm = () => {
      this.setState({ ...this.state,
        showForm: !this.state.showForm
      });
    };

    this.renderCompetitionDetails = () => {
      const {
        name,
        startDate,
        endDate,
        teamRegistrationDeadline,
        seedingDeadline,
        playersListDeadline
      } = this.props.competition;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Starts: ", startDate), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Ends: ", endDate), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Team Registration Deadline: ", teamRegistrationDeadline), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Seeding Deadline: ", seedingDeadline), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Players List Deadline: ", playersListDeadline)));
    };

    this.renderForm = () => {
      const {
        showForm
      } = this.state;
      const {
        organisation
      } = this.props.user;
      const {
        id
      } = this.props.competition;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, !showForm && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.toggleForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Register a team!"), showForm && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddTeamForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
        toggleForm: this.toggleForm,
        competitionId: id,
        organisationId: organisation.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }));
    };
  }

  render() {
    const {
      competitionDays,
      teams
    } = this.props.competition;
    const {
      organisation
    } = this.props.user;
    const userRoleId = organisation ? organisation.roleId : this.props.user.roleId;
    const organisationId = organisation ? organisation.id : 0;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, this.renderCompetitionDetails(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, competitionDays && competitionDays.map((day, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CompetitionDayCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      day: day,
      id: index + 1,
      key: index + 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Can__WEBPACK_IMPORTED_MODULE_4__["default"], {
      roleId: userRoleId,
      perform: "teams:create",
      data: {
        organisationId,
        competitionOrganisationId: this.props.competition.organisationId
      },
      yes: () => this.renderForm(),
      no: () => null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Teams registered:"), teams && teams.map(team => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: team.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, team.name))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      to: `/competitions/${this.props.match.params.competitionId}/create-game`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Add game"));
  }

}

const mapStateToProps = state => ({
  competition: state.competitions.selected,
  user: state.session.user
});

const mapDispatchToProps = {
  getOneCompetition: _store_competition_actions__WEBPACK_IMPORTED_MODULE_6__["getOneCompetition"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(CompetitionDetails));

/***/ }),

/***/ "./src/components/CreateCompetition/CreateCompetition.jsx":
/*!****************************************************************!*\
  !*** ./src/components/CreateCompetition/CreateCompetition.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _NewCompetitionDay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewCompetitionDay */ "./src/components/CreateCompetition/NewCompetitionDay.jsx");
/* harmony import */ var _store_competition_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/competition/actions */ "./src/store/competition/actions.js");
/* harmony import */ var _Can__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Can */ "./src/components/Can.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/CreateCompetition/CreateCompetition.jsx";






class CreateCompetition extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      name: "",
      startDate: "",
      endDate: "",
      teamRegistrationDeadline: "",
      seedingDeadline: "",
      playersListDeadline: "",
      competitionDays: [],
      competitionDayDates: []
    };

    this.componentDidMount = () => {
      this.addCompetitionDayComponent();
    };

    this.onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.changeCompetitionDayDates = (index, value) => {
      const NewCompetitionDayDates = [...this.state.competitionDayDates];
      NewCompetitionDayDates[index] = value;
      this.setState({ ...this.state,
        competitionDayDates: NewCompetitionDayDates
      });
    };

    this.onSubmit = event => {
      event.preventDefault();
      const {
        startDate,
        endDate,
        teamRegistrationDeadline,
        seedingDeadline,
        playersListDeadline,
        competitionDays,
        competitionDayDates
      } = this.state;
      const today = new Date();
      const month = today.getMonth() + 1 < 10 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1;
      const day = today.getDay() + 1 < 10 ? "0" + (today.getDay() + 1) : today.getDay() + 1;
      const now = today.getFullYear() + "-" + month + "-" + day;

      if (startDate < now || endDate < now || teamRegistrationDeadline < now || seedingDeadline < now || playersListDeadline < now) {
        alert("All dates should be filled in and in the future. You cannot create a competition in the past.");
        return null;
      }

      if (competitionDays.length) {
        if (!competitionDayDates.length || competitionDayDates.find(date => date < now)) {
          alert("All dates should be filled in and in the future. You cannot create a competition in the past.");
          return null;
        }
      }

      const competitionData = { ...this.state,
        organisationId: this.props.organisation.id
      };
      this.props.addNewCompetition(competitionData, this.props.token);
    };

    this.addCompetitionDayComponent = () => {
      const competitionDays = [...this.state.competitionDays];
      this.setState({
        competitionDays: competitionDays.concat(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewCompetitionDay__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: competitionDays.length,
          id: competitionDays.length,
          handleChange: this.changeCompetitionDayDates,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }))
      });
    };

    this.renderCompetitionForm = () => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Create new competition"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        name: "name",
        placeholder: "Enter competition name",
        value: this.state.name,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "startDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "Start date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "date",
        name: "startDate",
        value: this.state.startDate,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "endDate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "End date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "date",
        name: "endDate",
        value: this.state.endDate,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "teamRegistrationDeadline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Team registration deadline"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "date",
        name: "teamRegistrationDeadline",
        value: this.state.teamRegistrationDeadline,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "seedingDeadline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "Seeding deadline"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "date",
        name: "seedingDeadline",
        value: this.state.seedingDeadline,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "playersListDeadline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Player's list deadline"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "date",
        name: "playersListDeadline",
        value: this.state.playersListDeadline,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: this.addCompetitionDayComponent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "+"), this.state.competitionDays, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "create"));
    };
  }

  render() {
    const userRoleId = this.props.organisation ? this.props.organisation.roleId : this.props.user.roleId;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Can__WEBPACK_IMPORTED_MODULE_4__["default"], {
      roleId: userRoleId,
      perform: "competitions:create",
      yes: () => this.renderCompetitionForm(),
      no: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "You have to be the contact of an organisation to create a competition"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    });
  }

}

const mapStateToProps = state => ({
  token: state.session.jwt,
  user: state.session.user,
  organisation: state.session.user.organisation
});

const mapDispatchToProps = {
  addNewCompetition: _store_competition_actions__WEBPACK_IMPORTED_MODULE_3__["addNewCompetition"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(CreateCompetition));

/***/ }),

/***/ "./src/components/CreateCompetition/NewCompetitionDay.jsx":
/*!****************************************************************!*\
  !*** ./src/components/CreateCompetition/NewCompetitionDay.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewCompetitionDay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/CreateCompetition/NewCompetitionDay.jsx";

class NewCompetitionDay extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      value: ""
    };

    this.onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
      this.props.handleChange(this.props.id, event.target.value);
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "date",
      name: "value",
      onChange: this.onChange,
      value: this.state.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    });
  }

}

/***/ }),

/***/ "./src/components/CreateOrganisation/CreateOrganisation.jsx":
/*!******************************************************************!*\
  !*** ./src/components/CreateOrganisation/CreateOrganisation.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_organisation_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/organisation/actions */ "./src/store/organisation/actions.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/CreateOrganisation/CreateOrganisation.jsx";




class CreateOrganisation extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      organisationName: "",
      roleId: 4,
      organisationEmail: ""
    };

    this.onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.onSubmit = event => {
      event.preventDefault();
      this.props.addOrganisation(this.state, this.props.token);
      this.setState({
        organisationName: "",
        roleId: 4,
        organisationEmail: ""
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "organisationName",
      placeholder: "Enter organisation name",
      value: this.state.organisationName,
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "organisationEmail",
      placeholder: "Enter e-mail address",
      value: this.state.organisationEmail,
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      id: "club",
      name: "roleId",
      value: 4,
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "club",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Club Board"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      id: "federation",
      name: "roleId",
      value: 5,
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "federation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Federation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Sign up"));
  }

}

const mapStateToProps = state => ({
  token: state.session.jwt
});

const mapDispatchToProps = {
  addOrganisation: _store_organisation_actions__WEBPACK_IMPORTED_MODULE_2__["addOrganisation"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(CreateOrganisation));

/***/ }),

/***/ "./src/components/Games/AddGame.jsx":
/*!******************************************!*\
  !*** ./src/components/Games/AddGame.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/components/Games/Location.jsx");
/* harmony import */ var _store_competition_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/competition/actions */ "./src/store/competition/actions.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/Games/AddGame.jsx";





class AddGame extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      homeTeamId: 0,
      awayTeamId: 0,
      location: "",
      lat: null,
      lng: null,
      competitionDayId: 0,
      competitionId: 0,
      startTime: "",
      changeLocation: false
    };

    this.componentDidMount = async () => {
      const competitionId = parseInt(this.props.match.params.competitionId);

      if (!Object.keys(this.props.competition).length) {
        await this.props.getOneCompetition(competitionId);
      }

      const competitionDayIdInitialValue = this.props.competition.competitionDays.length > 1 ? 0 : this.props.competition.competitionDays[0].id;
      this.setState({
        competitionDayId: competitionDayIdInitialValue,
        competitionId
      });
    };

    this.onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.allFilledIn = state => {
      for (var key in state) if (!state[key]) return false;

      return true;
    };

    this.onSubmit = event => {
      event.preventDefault();
      const {
        changeLocation,
        ...dataFields
      } = this.state;

      if (!this.allFilledIn(dataFields)) {
        alert("You have to fill in all fields before you can create a game.");
        return null;
      }

      console.log("Let's create the game!");
      this.props.addGame(dataFields, this.props.token);
    };

    this.handleLocationSelect = (address, coordinates) => {
      this.setState({ ...this.state,
        location: address,
        lat: coordinates.lat,
        lng: coordinates.lng,
        changeLocation: false
      });
    };

    this.toggleChangeLocation = () => {
      this.setState({ ...this.state,
        changeLocation: !this.state.changeLocation
      });
    };

    this.renderLocation = () => {
      if (this.state.location && this.state.changeLocation) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, "Selected location: ", this.state.location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "Select new location:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Location__WEBPACK_IMPORTED_MODULE_2__["default"], {
          handleSelection: this.handleLocationSelect,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }));
      } else if (this.state.location && !this.state.changeLocation) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, "Selected location: ", this.state.location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          onClick: this.toggleChangeLocation,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "Change location"));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }, "Select location:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Location__WEBPACK_IMPORTED_MODULE_2__["default"], {
          handleSelection: this.handleLocationSelect,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }));
      }
    };

    this.renderHomeSelectOptions = () => {
      return this.props.teams.map(team => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: team.id,
        value: team.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, team.name));
    };

    this.renderAwaySelectOption = () => {
      const homeTeamId = parseInt(this.state.homeTeamId);
      return this.props.teams.filter(team => team.id !== homeTeamId).map(team => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        key: team.id,
        value: team.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, team.name));
    };

    this.renderCompetitionDaysSelectOption = () => {
      const competitionDays = this.props.competition.competitionDays;

      if (competitionDays) {
        return competitionDays.length > 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
          name: "competitionDayId",
          onChange: this.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, "Select Competition Day"), competitionDays.map((day, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: day.id,
          value: day.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, "Competition day ", index + 1, ": ", day.date))) : competitionDays.map((day, index) => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            key: day.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }, "Competition day ", index + 1, ": ", day.date);
        });
      } else {
        return null;
      }
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "homeTeamId",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "Home Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "homeTeamId",
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "Select Home Team"), this.props.teams && this.renderHomeSelectOptions()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "awayTeamId",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, "Away Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      name: "awayTeamId",
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, "Select Away Team"), this.props.teams && this.renderAwaySelectOption()), this.renderLocation(), this.renderCompetitionDaysSelectOption(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "startTime",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "Start time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "time",
      name: "startTime",
      value: this.state.startTime,
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "Create game"));
  }

}

const mapStateToProps = state => ({
  token: state.session.jwt,
  teams: state.competitions.selected.teams,
  competition: state.competitions.selected
});

const mapDispatchToProps = {
  getOneCompetition: _store_competition_actions__WEBPACK_IMPORTED_MODULE_3__["getOneCompetition"],
  addGame: _store_competition_actions__WEBPACK_IMPORTED_MODULE_3__["addGame"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AddGame));

/***/ }),

/***/ "./src/components/Games/Location.jsx":
/*!*******************************************!*\
  !*** ./src/components/Games/Location.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Location; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-places-autocomplete */ "./node_modules/react-places-autocomplete/dist/index.js");
/* harmony import */ var react_places_autocomplete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/Games/Location.jsx";


class Location extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      address: "",
      coordinates: {
        lat: null,
        lng: null
      }
    };

    this.onSelect = async address => {
      const results = await Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__["geocodeByAddress"])(address);
      const latLng = await Object(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__["getLatLng"])(results[0]);
      this.setState({
        address: "",
        coordinates: {
          lat: null,
          lng: null
        }
      });
      this.props.handleSelection(address, { ...latLng
      });
    };

    this.onChange = address => {
      this.setState({
        address: address
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_places_autocomplete__WEBPACK_IMPORTED_MODULE_1___default.a, {
      value: this.state.address,
      onChange: this.onChange,
      onSelect: this.onSelect,
      shouldFetchSuggestions: this.state.address.length > 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, ({
      getInputProps,
      suggestions,
      getSuggestionItemProps,
      loading
    }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", Object.assign({}, getInputProps({
      placeholder: "Enter address"
    }), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "...loading..."), suggestions.map(suggestion => {
      const style = {
        backgroundColor: suggestion.active ? "grey" : "lightgrey"
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, getSuggestionItemProps(suggestion, {
        style
      }), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), suggestion.description);
    }))));
  }

}

/***/ }),

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _Can__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Can */ "./src/components/Can.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/Header/Header.jsx";




 // import Profile from "./ProfileMenu";

class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      organisation
    } = this.props.user;
    const userRoleId = organisation ? organisation.roleId : this.props.user.roleId;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "R.M.G."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "Home")), !this.props.token ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      style: {
        display: "inline"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Log in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/player-signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Sign up")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
      style: {
        display: "inline"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, !organisation && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/create-organisation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Create Club/Federation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Can__WEBPACK_IMPORTED_MODULE_4__["default"], {
      roleId: userRoleId,
      perform: "competitions:create",
      yes: () => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: "/create-competition",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, "Create Competition");
      },
      no: () => null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }))));
  }

}

const mapStateToProps = state => ({
  token: state.session.jwt,
  user: state.session.user
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Header));

/***/ }),

/***/ "./src/components/Header/MenuButton.jsx":
/*!**********************************************!*\
  !*** ./src/components/Header/MenuButton.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/Header/MenuButton.jsx";
 // import AccountCircle from "material-ui-icons/AccountCircle";


 // import { withStyles } from "material-ui/styles";




class MenuButton extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      anchorEl: null
    };

    this.handleMenu = event => {
      this.setState({
        anchorEl: event.currentTarget
      });
    };

    this.handleClose = () => {
      this.setState({
        anchorEl: null
      });
    };
  }

  /* props: 
  iconType: AccountCircle,
  edgePosition: "start/end/"""
  class: classes.tabLink
  item: 
  {label: "Profile",
  path: "/profile"}
  */
  render() {
    const {
      anchorEl
    } = this.state;
    const {
      edgePosition
    } = this.props;
    const open = Boolean(anchorEl);
    const Wrapper = this.props.iconType;
    const listItems = this.props.items.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      onClick: this.handleClose,
      className: this.props.class,
      label: item.label,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"],
      to: item.path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      edge: edgePosition,
      "aria-owns": open ? "menu-appbar" : null,
      "aria-haspopup": "true",
      onClick: this.handleMenu,
      color: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: "menu-appbar",
      anchorEl: anchorEl,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      open: open,
      onClose: this.handleClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, listItems));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MenuButton);

/***/ }),

/***/ "./src/components/Header/NavBar.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/NavBar.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MenuButton */ "./src/components/Header/MenuButton.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/Header/NavBar.jsx";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  appBar: {
    top: 0,
    bottom: "auto"
  },
  grow: {
    flexGrow: 1
  },
  tabLink: {
    display: "block"
  }
}));

const NavBar = props => {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    position: "fixed",
    color: "primary",
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    iconType: _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default.a,
    edgePosition: "start",
    class: classes.tabLink,
    items: [{
      label: "Home",
      path: "/"
    }, {
      label: "Organisation",
      path: "/organisations"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, props.location.pathname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.grow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), !props.token ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    iconType: _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6___default.a,
    edgePosition: "end",
    class: classes.tabLink,
    items: [{
      label: "Log in",
      path: "/login"
    }, {
      label: "Sign up",
      path: "/signup"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    iconType: _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_6___default.a,
    edgePosition: "end",
    class: classes.tabLink,
    items: [{
      label: "Profile",
      path: "/profile"
    }, {
      label: "Log out",
      path: "/logout"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }))));
};

const mapStateToProps = state => ({
  token: state.session.jwt
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(NavBar)));

/***/ }),

/***/ "./src/components/Home/CompetitionCard.jsx":
/*!*************************************************!*\
  !*** ./src/components/Home/CompetitionCard.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store_competition_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/competition/actions */ "./src/store/competition/actions.js");
/* harmony import */ var _competitionCard_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./competitionCard.css */ "./src/components/Home/competitionCard.css");
/* harmony import */ var _competitionCard_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_competitionCard_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/Home/CompetitionCard.jsx";






const CompetitionCard = props => {
  const {
    name,
    startDate,
    endDate,
    id
  } = props.competition;

  const setSelectedCompetition = () => {
    const setCompetitionAction = Object(_store_competition_actions__WEBPACK_IMPORTED_MODULE_3__["setSelectedCompetitionToStore"])(props.competition);
    props.dispatch(setCompetitionAction);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: `/competitions/${id}`,
    style: {
      textDecoration: "none"
    },
    onClick: setSelectedCompetition,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "competitionCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "starts: ", startDate, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), "ends: ", endDate)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(CompetitionCard));

/***/ }),

/***/ "./src/components/Home/Home.jsx":
/*!**************************************!*\
  !*** ./src/components/Home/Home.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store_competition_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/competition/actions */ "./src/store/competition/actions.js");
/* harmony import */ var _CompetitionCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompetitionCard */ "./src/components/Home/CompetitionCard.jsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles */ "./src/styles.js");
/* harmony import */ var _Can__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Can */ "./src/components/Can.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/Home/Home.jsx";










class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      redirect: null
    };

    this.componentDidMount = () => {
      if (!this.props.competitions.length) {
        this.props.getAllCompetitions();
      }
    };

    this.renderCompetitionCards = () => {
      return this.props.competitions.map(competition => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CompetitionCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
        competition: competition,
        key: competition.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
    };
  }

  render() {
    const {
      competitions,
      user
    } = this.props;
    const userRoleId = user.organisation ? user.organisation.roleId : user.roleId;

    if (this.state.redirect) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
        to: this.state.redirect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      });
    }

    if (!competitions.length) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Loading data...");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, this.renderCompetitionCards(), user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Can__WEBPACK_IMPORTED_MODULE_8__["default"], {
      roleId: userRoleId,
      perform: "competitions:create",
      yes: () => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__["default"], {
          size: "small",
          color: "secondary",
          "aria-label": "add",
          style: _styles__WEBPACK_IMPORTED_MODULE_7__["fabPositioning"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default.a, {
          onClick: () => this.setState({
            redirect: "/create-competition"
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }));
      },
      no: () => null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }));
  }

}
/*
 {!organisation && (
                <Link to="/create-organisation">Create Club/Federation</Link>
              )}
              <Can
                roleId={userRoleId}
                perform="competitions:create"
                yes={() => {
                  return (
                    <Link to="/create-competition">Create Competition</Link>
                  );
                }}
                no={() => null}
              />
*/


const mapStateToProps = state => ({
  competitions: state.competitions.all,
  token: state.session.jwt,
  user: state.session.user
});

const mapDispatchToProps = {
  getAllCompetitions: _store_competition_actions__WEBPACK_IMPORTED_MODULE_5__["getAllCompetitions"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

/***/ "./src/components/Home/competitionCard.css":
/*!*************************************************!*\
  !*** ./src/components/Home/competitionCard.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./competitionCard.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Home/competitionCard.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./competitionCard.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Home/competitionCard.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./competitionCard.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Home/competitionCard.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Login-out/Login.jsx":
/*!********************************************!*\
  !*** ./src/components/Login-out/Login.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/user/actions */ "./src/store/user/actions.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles */ "./src/styles.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/Login-out/Login.jsx";





class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      email: "",
      password: ""
    };

    this.onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.onSubmit = event => {
      event.preventDefault();
      this.props.login(this.state);
      this.setState({
        email: "",
        password: ""
      });
    };
  }

  render() {
    if (this.props.token) {
      setTimeout(() => {
        this.props.history.push("/");
      }, 500);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Redirecting... ");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      style: _styles__WEBPACK_IMPORTED_MODULE_3__["headerSpacing"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "email",
      placeholder: "Enter e-mail address",
      value: this.state.email,
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      name: "password",
      placeholder: "Enter password",
      value: this.state.password,
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Log in"));
  }

}

const mapStateToProps = state => ({
  token: state.session.jwt
});

const mapDispatchToProps = {
  login: _store_user_actions__WEBPACK_IMPORTED_MODULE_2__["login"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Login));

/***/ }),

/***/ "./src/components/Login-out/Logout.jsx":
/*!*********************************************!*\
  !*** ./src/components/Login-out/Logout.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/user/actions */ "./src/store/user/actions.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles */ "./src/styles.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/Login-out/Logout.jsx";





class Logout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.onSubmit = event => {
      event.preventDefault();
      this.props.dispatch(Object(_store_user_actions__WEBPACK_IMPORTED_MODULE_2__["logoutAction"])());
    };
  }

  render() {
    if (!this.props.token) {
      setTimeout(() => {
        this.props.history.push("/login");
      }, 500);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, " Redirecting...");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      style: _styles__WEBPACK_IMPORTED_MODULE_3__["headerSpacing"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "Log out"));
  }

}

const mapStateToProps = state => ({
  token: state.session.jwt
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Logout));

/***/ }),

/***/ "./src/components/Profile/DataCard.jsx":
/*!*********************************************!*\
  !*** ./src/components/Profile/DataCard.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/user/actions */ "./src/store/user/actions.js");
/* harmony import */ var _store_organisation_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/organisation/actions */ "./src/store/organisation/actions.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/Profile/DataCard.jsx";





const DataCard = props => {
  const [editMode, setEditMode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [valueName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.name);
  const [dataValue, setDataValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.value);

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const onSubmit = event => {
    event.preventDefault();

    if (props.about === "user") {
      props.updateUser({
        [valueName]: dataValue
      }, props.token);
    } else if (props.about === "organisation") {
      props.updateOrganisation({
        [valueName]: dataValue
      }, props.token);
    }

    toggleEdit();
  };

  const onChange = event => {
    setDataValue(event.target.value);
  };

  if (editMode) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: onSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      value: dataValue,
      onChange: onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, "edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      onClick: () => {
        toggleEdit();
        setDataValue(props.value);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, "cancel"));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, props.label, ": ", props.value), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: toggleEdit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Edit"));
};

const mapStateToProps = state => ({
  token: state.session.jwt
});

const mapDispatchToProps = {
  updateUser: _store_user_actions__WEBPACK_IMPORTED_MODULE_2__["updateUser"],
  updateOrganisation: _store_organisation_actions__WEBPACK_IMPORTED_MODULE_3__["updateOrganisation"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(DataCard));

/***/ }),

/***/ "./src/components/Profile/ProfilePage.jsx":
/*!************************************************!*\
  !*** ./src/components/Profile/ProfilePage.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DataCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DataCard */ "./src/components/Profile/DataCard.jsx");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/Profile/ProfilePage.jsx";




class ProfilePage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (!Object.keys(this.props.user).length) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, " You have to log in to look at your profile page.");
    }

    const {
      firstName,
      lastName,
      email,
      organisation
    } = this.props.user;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "I will be the profile page!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DataCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: firstName,
      name: "firstName",
      label: "First name",
      about: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DataCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: lastName,
      name: "lastName",
      label: "Last name",
      about: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DataCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: email,
      name: "email",
      label: "E - mail address",
      about: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), organisation && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "You are the contact for an organisation. The organisation's details are listed below."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DataCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: organisation.organisationName,
      name: "organisationName",
      label: "Organisation name",
      about: "organisation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DataCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: organisation.organisationEmail,
      name: "organisationEmail",
      label: "Organisation e - mail address",
      about: "organisation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })));
  }

}

const mapStateToProps = state => ({
  token: state.session.jwt,
  user: state.session.user
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ProfilePage));

/***/ }),

/***/ "./src/components/SignUp/SignUpPlayer.jsx":
/*!************************************************!*\
  !*** ./src/components/SignUp/SignUpPlayer.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/user/actions */ "./src/store/user/actions.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles */ "./src/styles.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/components/SignUp/SignUpPlayer.jsx";





class SignUpPlayer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };

    this.onChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.onSubmit = event => {
      event.preventDefault();
      this.props.signUp(this.state);
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      });
    };
  }

  render() {
    if (this.props.token) {
      setTimeout(() => {
        this.props.history.push("/");
      }, 500);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, " Redirecting ...");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.onSubmit,
      style: _styles__WEBPACK_IMPORTED_MODULE_3__["headerSpacing"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "firstName",
      placeholder: "Enter first name",
      value: this.state.firstName,
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "lastName",
      placeholder: "Enter last name",
      value: this.state.lastName,
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      name: "email",
      placeholder: "Enter e-mail address",
      value: this.state.email,
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      name: "password",
      placeholder: "Enter password",
      value: this.state.password,
      onChange: this.onChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Sign up"));
  }

}

const mapStateToProps = state => ({
  token: state.session.jwt
});

const mapDispatchToProps = {
  signUp: _store_user_actions__WEBPACK_IMPORTED_MODULE_2__["signUp"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(SignUpPlayer));

/***/ }),

/***/ "./src/components/endpointRoles.js":
/*!*****************************************!*\
  !*** ./src/components/endpointRoles.js ***!
  \*****************************************/
/*! exports provided: federation, clubBoard, teamCaptain, spiritCaptain, player, superAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "federation", function() { return federation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clubBoard", function() { return clubBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "teamCaptain", function() { return teamCaptain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spiritCaptain", function() { return spiritCaptain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "player", function() { return player; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superAdmin", function() { return superAdmin; });
const federation = 5;
const clubBoard = 4;
const teamCaptain = 3;
const spiritCaptain = 2;
const player = 1;
const superAdmin = 18021993;

/***/ }),

/***/ "./src/components/rbac-rules.js":
/*!**************************************!*\
  !*** ./src/components/rbac-rules.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _endpointRoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endpointRoles */ "./src/components/endpointRoles.js");

const rules = {
  [_endpointRoles__WEBPACK_IMPORTED_MODULE_0__["player"]]: {
    static: ["players:read", "teams:read", "teams:update-join", "competitions:read", "games:read"],
    dynamic: {
      "players:update": ({
        userId,
        playerId
      }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "players:delete": ({
        userId,
        playerId
      }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      }
    }
  },
  [_endpointRoles__WEBPACK_IMPORTED_MODULE_0__["spiritCaptain"]]: {
    static: ["players:read", "teams:read", "teams:update-join", "competitions:read", "games:read"],
    dynamic: {
      "players:update": ({
        userId,
        playerId
      }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "players:delete": ({
        userId,
        playerId
      }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "games:update-score": ({
        homeTeamId,
        awayTeamId,
        userTeamId
      }) => {
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
  [_endpointRoles__WEBPACK_IMPORTED_MODULE_0__["teamCaptain"]]: {
    static: ["players:read", "teams:read", "teams:update-join", "competitions:read", "games:read"],
    dynamic: {
      "players:update": ({
        userId,
        playerId
      }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "players:delete": ({
        userId,
        playerId
      }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "teams:update-(un)assign-captains": ({
        teamId,
        userTeamId
      }) => {
        if (!teamId || !userTeamId) return false;
        return teamId === userTeamId;
      },
      "games:update-score": ({
        homeTeamId,
        awayTeamId,
        userTeamId
      }) => {
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
  [_endpointRoles__WEBPACK_IMPORTED_MODULE_0__["clubBoard"]]: {
    static: ["players:read", "teams:read", "teams:create", "competitions:read", "competitions:update-add-team", "games:read"],
    dynamic: {
      "players:update": ({
        userId,
        playerId
      }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "players:delete": ({
        userId,
        playerId
      }) => {
        if (!userId || !playerId) return false;
        return userId === playerId;
      },
      "teams:update": ({
        teamOrgansationId,
        organisationId
      }) => {
        if (!teamOrgansationId || !organisationId) return false;
        return teamOrgansationId === organisationId;
      },
      "teams:update-add-player": ({
        team,
        organisation
      }) => {
        if (!team || !organisation) return false;
        return team.organisationId === organisation.id;
      },
      "teams:update-remove-player": ({
        team,
        organisation
      }) => {
        if (!team || !organisation) return false;
        return team.organisationId === organisation.id;
      },
      "teams:update-(un)assign-captains": ({
        team,
        organisation
      }) => {
        if (!team || !organisation) return false;
        return team.organisationId === organisation.id;
      },
      "teams:delete": ({
        team,
        organisation
      }) => {
        if (!team || !organisation) return false;
        return team.organisationId === organisation.id;
      },
      "competitions:update-remove-team": ({
        team,
        organisation
      }) => {
        if (!team || !organisation) return false;
        return team.organisationId === organisation.id;
      },
      "games:update-score": ({
        homeTeam,
        awayTeam,
        user
      }) => {
        if (!homeTeam || !awayTeam || !user) return false;
        return homeTeam.organisationId === user.organisationId || awayTeam.organisationId === user.organisationId;
      },
      "games:update-home-team-spirit": ({
        homeTeam,
        awayTeam,
        user
      }) => {
        if (!homeTeam || !awayTeam || !user) return false;
        return awayTeam.organisationId === user.organisationId;
      },
      "games:update-away-team-spirit": ({
        homeTeam,
        awayTeam,
        user
      }) => {
        if (!homeTeam || !awayTeam || !user) return false;
        return homeTeam.organisationId === user.organisationId;
      }
    }
  },
  [_endpointRoles__WEBPACK_IMPORTED_MODULE_0__["federation"]]: {
    static: ["players:create", "players:read", "teams:read", "competitions:read", "games:read", "competitions:create", "teams:update", //
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
    "games:update-home-team-spirit", //
    "games:update-away-team-spirit", //
    "games:delete" //
    ],
    dynamic: {
      "teams:create": ({
        organisationId,
        competitionOrganisationId
      }) => {
        if (!organisationId || !competitionOrganisationId) return false;
        return organisationId === competitionOrganisationId;
      } // "teams:update": ()=> {},
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
  [_endpointRoles__WEBPACK_IMPORTED_MODULE_0__["superAdmin"]]: {
    static: ["players:create", "players:read", "players:update", "players:delete", "teams:create", "teams:read", "teams:update", "teams:update-add-player", "teams:update-join", "teams:update-remove-player", "teams:update-(un)assign-captains", "teams:delete", "competitions:create", "competitions:read", "competitions:update", "competitions:update-add-team", "competitions:update-remove-team", "competitions:delete", "games:create", "games:read", "games:update", "games:update-score", "games:update-home-team-spirit", "games:update-away-team-spirit", "games:delete"]
  }
};
/* harmony default export */ __webpack_exports__["default"] = (rules);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ "./src/store/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/index.js";



 // import { store } from "./store/store";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
  store: _store_store__WEBPACK_IMPORTED_MODULE_3__["store"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__["PersistGate"], {
  loading: null,
  persistor: _store_store__WEBPACK_IMPORTED_MODULE_3__["persistor"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})))), document.getElementById("root"));

/***/ }),

/***/ "./src/store/competition/actions.js":
/*!******************************************!*\
  !*** ./src/store/competition/actions.js ***!
  \******************************************/
/*! exports provided: SET_FETCHED_COMPETITIONS, ADD_COMPETITION, ADD_COMPETITION_TO_USER, SET_SELECTED_COMPETITION, addGame, getOneCompetition, setSelectedCompetitionToStore, getAllCompetitions, addNewCompetition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FETCHED_COMPETITIONS", function() { return SET_FETCHED_COMPETITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMPETITION", function() { return ADD_COMPETITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMPETITION_TO_USER", function() { return ADD_COMPETITION_TO_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_COMPETITION", function() { return SET_SELECTED_COMPETITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addGame", function() { return addGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOneCompetition", function() { return getOneCompetition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedCompetitionToStore", function() { return setSelectedCompetitionToStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCompetitions", function() { return getAllCompetitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewCompetition", function() { return addNewCompetition; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api.js");


const SET_FETCHED_COMPETITIONS = "competitions/SET_FETCHED_COMPETITIONS_TO_STORE";
const ADD_COMPETITION = "competitions/ADD_COMPETITION";
const ADD_COMPETITION_TO_USER = "competitions/ADD_COMPETITION_TO_USER_DATA";
const SET_SELECTED_COMPETITION = "competitions/SET_SELECTED_COMPETITION";
function addGame(gameData, token) {
  return async (dispatch, getState) => {
    try {
      const authorization = Object(_api__WEBPACK_IMPORTED_MODULE_1__["authHeader"])(token);
      const newGame = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_api__WEBPACK_IMPORTED_MODULE_1__["baseUrl"]}/games`, gameData, authorization);
      console.log("new game", newGame);
    } catch (error) {
      throw error;
    }
  };
}
function getOneCompetition(id) {
  return async (dispatch, getState) => {
    try {
      const competition = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_api__WEBPACK_IMPORTED_MODULE_1__["baseUrl"]}/competitions/${id}`);
      dispatch(setSelectedCompetitionToStore(competition.data));
    } catch (error) {
      throw error;
    }
  };
}
function setSelectedCompetitionToStore(competition) {
  return {
    type: SET_SELECTED_COMPETITION,
    payload: competition
  };
}
function getAllCompetitions() {
  return async (dispatch, getState) => {
    try {
      const competitions = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${_api__WEBPACK_IMPORTED_MODULE_1__["baseUrl"]}/competitions`);
      dispatch(setCompetitionsToStore(competitions.data));
    } catch (error) {
      throw error;
    }
  };
}

function setCompetitionsToStore(competitions) {
  return {
    type: SET_FETCHED_COMPETITIONS,
    payload: competitions
  };
}

function addNewCompetition(competitionData, token) {
  return async (dispatch, getState) => {
    try {
      const authorization = Object(_api__WEBPACK_IMPORTED_MODULE_1__["authHeader"])(token);

      if (!competitionData.organisationId) {
        console.error("You cannot create a competition, since you are not the contact person of an organisation.");
        return null;
      }

      const newCompetition = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_api__WEBPACK_IMPORTED_MODULE_1__["baseUrl"]}/competitions`, competitionData, authorization);
      dispatch(addCompetitionAction(newCompetition.data.newCompetition));
      dispatch(addCompetitionToAllCompetitionsAction(newCompetition.data.newCompetition));
    } catch (error) {
      throw error;
    }
  };
}

function addCompetitionToAllCompetitionsAction(competitionData) {
  return {
    type: ADD_COMPETITION,
    payload: competitionData
  };
}

function addCompetitionAction(competitionData) {
  return {
    type: ADD_COMPETITION_TO_USER,
    payload: competitionData
  };
}

/***/ }),

/***/ "./src/store/competition/reducer.js":
/*!******************************************!*\
  !*** ./src/store/competition/reducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/competition/actions.js");
/* harmony import */ var _team_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../team/actions */ "./src/store/team/actions.js");


const initialState = {
  all: [],
  selected: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case _team_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_TEAM_TO_COMPETITION"]:
      {
        const allCompetitionsUpdated = state.all.map(competition => {
          if (competition.id === state.selected.id) {
            return { ...competition,
              teams: [...competition.teams, payload]
            };
          } else {
            return competition;
          }
        });
        return { ...state,
          all: allCompetitionsUpdated,
          selected: { ...state.selected,
            teams: [...state.selected.teams, payload]
          }
        };
      }

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_COMPETITION"]:
      {
        return { ...state,
          selected: { ...payload
          }
        };
      }

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SET_FETCHED_COMPETITIONS"]:
      {
        return { ...state,
          all: [...payload]
        };
      }

    case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_COMPETITION"]:
      return { ...state,
        all: [...state.all, payload]
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/organisation/actions.js":
/*!*******************************************!*\
  !*** ./src/store/organisation/actions.js ***!
  \*******************************************/
/*! exports provided: UPDATE_USER_ORGANISATION, ADD_ORGANISATION_TO_USER_DATA, updateOrganisation, addOrganisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_ORGANISATION", function() { return UPDATE_USER_ORGANISATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ORGANISATION_TO_USER_DATA", function() { return ADD_ORGANISATION_TO_USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOrganisation", function() { return updateOrganisation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrganisation", function() { return addOrganisation; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api.js");


const UPDATE_USER_ORGANISATION = "organisations/UPDATE_ORGANISATION_DATA_FOR_USER";
const ADD_ORGANISATION_TO_USER_DATA = "organisations/ADD_NEW_ORGANISATION_TO_USER";
function updateOrganisation(updateData, token) {
  return async (dispatch, getState) => {
    try {
      const authorization = Object(_api__WEBPACK_IMPORTED_MODULE_1__["authHeader"])(token);
      const updatedOrganisationData = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`${_api__WEBPACK_IMPORTED_MODULE_1__["baseUrl"]}/organisations`, updateData, authorization);
      dispatch(updateOrganisationAction(updatedOrganisationData.data));
    } catch (error) {
      throw error;
    }
  };
}

function updateOrganisationAction(updateData) {
  return {
    type: UPDATE_USER_ORGANISATION,
    payload: updateData
  };
}

function addOrganisation(organsationData, token) {
  return async (dispatch, getState) => {
    try {
      const authorization = Object(_api__WEBPACK_IMPORTED_MODULE_1__["authHeader"])(token);
      const newOrganisation = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_api__WEBPACK_IMPORTED_MODULE_1__["baseUrl"]}/organisations`, organsationData, authorization);
      console.log("New organisation created test", newOrganisation);
      dispatch(updateUserWithNewOrganisation(newOrganisation.data.newOrganisation));
    } catch (error) {
      throw error;
    }
  };
}

function updateUserWithNewOrganisation(newOrganisationData) {
  return {
    type: ADD_ORGANISATION_TO_USER_DATA,
    payload: newOrganisationData
  };
}

/***/ }),

/***/ "./src/store/rootReducer.js":
/*!**********************************!*\
  !*** ./src/store/rootReducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/reducer */ "./src/store/user/reducer.js");
/* harmony import */ var _competition_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./competition/reducer */ "./src/store/competition/reducer.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  session: _user_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  competitions: _competition_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: store, persistor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistor", function() { return persistor; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ "./src/store/rootReducer.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__);




 // ------------------------------USE THIS FOR REDUX PERSIST ----------------------//

const persistConfig = {
  key: "root",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default()),
  whitelist: ["session"]
};
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__["persistReducer"])(persistConfig, _rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"]);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : x => x;
const enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]), devTools);
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, enhancer);
const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__["persistStore"])(store);
 // ------------------------------- USE THIS FOR STORE WITHOUT PERSIST ---------------------//
// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
//   ? window.__REDUX_DEVTOOLS_EXTENSION__()
//   : x => x;
// const enhancer = compose(applyMiddleware(ReduxThunk), devTools);
// const store = createStore(rootReducer, enhancer);
// export { store };

/***/ }),

/***/ "./src/store/team/actions.js":
/*!***********************************!*\
  !*** ./src/store/team/actions.js ***!
  \***********************************/
/*! exports provided: ADD_TEAM_TO_COMPETITION, addTeam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TEAM_TO_COMPETITION", function() { return ADD_TEAM_TO_COMPETITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTeam", function() { return addTeam; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api.js");


const ADD_TEAM_TO_COMPETITION = "teams/ADD_NEW_TEAM_TO_COMPETITION";
function addTeam(name, organisationId, competitionId, token) {
  return async (dispatch, getState) => {
    try {
      const newTeamData = {
        name,
        organisationId,
        competitionId
      };
      const authorization = Object(_api__WEBPACK_IMPORTED_MODULE_1__["authHeader"])(token);
      const newTeam = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_api__WEBPACK_IMPORTED_MODULE_1__["baseUrl"]}/teams`, newTeamData, authorization);
      dispatch(addNewTeamToCompetition(newTeam.data));
    } catch (error) {
      throw error;
    }
  };
}

function addNewTeamToCompetition(teamData) {
  return {
    type: ADD_TEAM_TO_COMPETITION,
    payload: teamData
  };
}

/***/ }),

/***/ "./src/store/user/actions.js":
/*!***********************************!*\
  !*** ./src/store/user/actions.js ***!
  \***********************************/
/*! exports provided: SET_SESSION, REMOVE_SESSION, UPDATE_USER_DATA, updateUser, signUp, login, logoutAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SESSION", function() { return SET_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_SESSION", function() { return REMOVE_SESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_DATA", function() { return UPDATE_USER_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signUp", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./src/api.js");


const SET_SESSION = "users/SET_SESSION_DATA";
const REMOVE_SESSION = "users/REMOVE_SESSION_DATA";
const UPDATE_USER_DATA = "users/UPDATE_USER_DATA";
function updateUser(updateData, token) {
  return async (dispatch, getState) => {
    try {
      const authorization = Object(_api__WEBPACK_IMPORTED_MODULE_1__["authHeader"])(token);
      const updatedUserData = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`${_api__WEBPACK_IMPORTED_MODULE_1__["baseUrl"]}/users`, updateData, authorization);
      dispatch(updateUserAction(updatedUserData.data));
    } catch (error) {
      throw error;
    }
  };
}

function updateUserAction(updateData) {
  return {
    type: UPDATE_USER_DATA,
    payload: updateData
  };
}

function signUp(userData) {
  return async (dispatch, getState) => {
    try {
      const sessionData = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_api__WEBPACK_IMPORTED_MODULE_1__["baseUrl"]}/users`, userData);
      dispatch(setSessionAction(sessionData.data));
    } catch (error) {
      throw error;
    }
  };
}
function login(loginData) {
  return async (dispatch, getState) => {
    try {
      const sessionData = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${_api__WEBPACK_IMPORTED_MODULE_1__["baseUrl"]}/login`, loginData);
      dispatch(setSessionAction(sessionData.data));
    } catch (error) {
      throw error;
    }
  };
}

function setSessionAction(sessionData) {
  return {
    type: SET_SESSION,
    payload: sessionData
  };
}

function logoutAction() {
  return {
    type: REMOVE_SESSION
  };
}

/***/ }),

/***/ "./src/store/user/reducer.js":
/*!***********************************!*\
  !*** ./src/store/user/reducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/store/user/actions.js");
/* harmony import */ var _organisation_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../organisation/actions */ "./src/store/organisation/actions.js");
/* harmony import */ var _competition_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../competition/actions */ "./src/store/competition/actions.js");



const initialState = {
  jwt: "",
  user: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case _competition_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_COMPETITION_TO_USER"]:
      {
        const newCompetitions = state.user.organisation.competitions.concat(payload);
        return { ...state,
          user: { ...state.user,
            organisation: { ...state.user.organisation,
              competitions: newCompetitions
            }
          }
        };
      }

    case _organisation_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_ORGANISATION_TO_USER_DATA"]:
      {
        return { ...state,
          user: { ...state.user,
            organisation: payload,
            organisationId: payload.id
          }
        };
      }

    case _organisation_actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER_ORGANISATION"]:
      {
        return { ...state,
          user: { ...state.user,
            organisation: payload
          }
        };
      }

    case _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER_DATA"]:
      {
        return { ...state,
          user: payload.updatedUser
        };
      }

    case _actions__WEBPACK_IMPORTED_MODULE_0__["SET_SESSION"]:
      return { ...state,
        jwt: payload.jwt,
        user: payload.user
      };

    case _actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_SESSION"]:
      return { ...state,
        jwt: "",
        user: {}
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/styles.js":
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
/*! exports provided: fabPositioning, headerSpacing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fabPositioning", function() { return fabPositioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerSpacing", function() { return headerSpacing; });
const fabPositioning = {
  position: "fixed",
  zIndex: 1,
  bottom: 20,
  right: 20,
  margin: "0 auto"
};
const headerSpacing = {
  marginTop: "80px"
};

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/robingoudeketting/Documents/Codaisseur/frisbee-competition-app/frisbee-competition-client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map