const express = require("express");
const cors = require("cors");
const os = require("os");
const postRouter = require('./src/routers/post.router')

require("./src/DB/mongoose");
require("dotenv").config();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json())
app.use(postRouter)

app.get("/api/getUser", (req, res) =>
  res.send({ username: os.userInfo().username })
);

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));
  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(process.env.PORT || port, () => {
  console.log(`Server started on port ${port}`);
});
