import rules from "./rbac-rules";

const check = (rules, roleId, action, data) => {
  const permissions = rules[roleId];
  if (!permissions) {
    // role is not present in the rules
    console.log("Role not present in rules. action:", action);
    console.log("rules keys", Object.keys(rules));
    console.log("RoleId", roleId);
    console.log("data", data);
    return false;
  }

  const staticPermissions = permissions.static;
  const dynamicPermissions = permissions.dynamic;

  if (staticPermissions && staticPermissions.includes(action)) {
    console.log("Found a static rule! action:", action);

    return true;
  } else if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions[action];
    if (!permissionCondition) {
      // dynamic rule not provided for action
      console.log("Dynamic rule not provided for action:", action);
      return false;
    }
    console.log("Found a dynamic rule! action:", action);

    return permissionCondition(data);
  } else {
    // static rule not provided for action
    console.log("Static rule not provided for action", action);
    return false;
  }
};

const Can = props => {
  // console.log("Props of can test:", props);
  return check(rules, props.roleId, props.perform, props.data)
    ? props.yes()
    : props.no();
};

Can.defaultProps = {
  yes: () => null,
  no: () => null
};

export default Can;
