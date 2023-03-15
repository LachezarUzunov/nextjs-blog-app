const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "lacho",
        mongodb_password: "mhbrW42k5",
        mongodb_clusterName: "fatherhood",
        mongodb_database: "fatherhood-blog",
      },
    };
  }

  return {
    env: {
      mongodb_username: "lacho",
      mongodb_password: "mhbrW42k5",
      mongodb_clusterName: "fatherhood",
      mongodb_database: "fatherhood-blog",
    },
  };
};
