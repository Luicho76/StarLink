require('dotenv').config();
const server = require("../api/src/app");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`The server is listening on the port ${port}`);
  });
});
