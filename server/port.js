const argv = require("./argv"),
  port = 3002;
module.exports = parseInt(argv.port || process.env.PORT || port, 10);
