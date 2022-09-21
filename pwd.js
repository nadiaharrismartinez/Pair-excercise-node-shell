const { cwd } = require("node:process");

console.log(`Current directory: ${cwd()}`);

// module.exports.cwd = cwd;

module.exports = {
  cwd,
};
