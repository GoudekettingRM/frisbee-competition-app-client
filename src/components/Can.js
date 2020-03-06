import rules from "./rbac-rules";

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
  return check(rules, props.roleId, props.perform, props.data)
    ? props.yes()
    : props.no();
};

Can.defaultProps = {
  yes: () => null,
  no: () => null
};

export default Can;
