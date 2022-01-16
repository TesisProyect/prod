const express = require("express");
const app = express();
const path = require("path");
const https = require("https");
const fs = require("fs");
require("dotenv").config({ path: "./.env" });

/**
 * ENVIRONMENTS
 */

const port = Number(process.env.PORT || 8080);
const static = path.resolve(__dirname, "..", "public");

/**
 * SERVER SSL CERTIFICATES
 */

const certFolder = path.resolve(__dirname, "..", "cert");
const key = fs.readFileSync(path.resolve(certFolder, "key.pem"));
const cert = fs.readFileSync(path.resolve(certFolder, "cert.pem"));

/**
 *
 * SERVER FILES STATICS
 */

app.use(express.static(static));

/**
 *   LISTENING
 * */
const server = https.createServer(
  {
    key,
    cert,
  },
  app
);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(static, "index.html"));
});

server.listen(port, () => console.log(`listening app on port ${port}`));
