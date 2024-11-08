const express = require("express");
const router = express.Router();
const { exec } = require("child_process");

/* Reset FTP Service */
router.get("/reset-ftp", async (req, res) => {
  await exec(`systemctl restart service_name`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      res.status(500).send(`Error executing script: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
      res.status(500).send(`Script stderr: ${stderr}`);
      return;
    }

    console.log(`${stdout}`);
    res.json({
      success: true,
    });
  });
});

/* Reset LPR Service */
router.get("/reset-lpr", async (req, res) => {
  await exec(`systemctl restart service_name`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      res.status(500).send(`Error executing script: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
      res.status(500).send(`Script stderr: ${stderr}`);
      return;
    }

    console.log(`${stdout}`);
    res.json({
      success: true,
    });
  });
});

/* Reset All Service */
router.get("/", async (req, res) => {
  await exec(`bash ./scripts/reset-all-service.sh`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${error}`);
      res.status(500).send(`Error executing script: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Script stderr: ${stderr}`);
      res.status(500).send(`Script stderr: ${stderr}`);
      return;
    }

    console.log(`${stdout}`);
    res.json({
      success: true,
    });
  });
});

module.exports = router;
