const app = require("../app");

// Vercel requires a handler function, not the app directly
module.exports = (req, res) => {
  return app(req, res);
};
