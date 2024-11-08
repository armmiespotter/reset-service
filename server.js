const express = require("express");
const app = express();
const port = 3000;

const runScript = require("./routes/run-script");
const checkStatus = require("./routes/check-status");

app.use("/run-script", runScript);
app.use("/check-status", checkStatus);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
