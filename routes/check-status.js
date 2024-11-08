const express = require("express");
const router = express.Router();
const ping = require("ping");
const ftp = require("basic-ftp");

/* Check FTP */
router.get("/ftp", async (req, res) => {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host: "192.168.0.107",
      user: "sammy",
      password: "sammy",
      secure: false,
    });
    res.json({
      success: true,
      message: "FTP connection successful!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to connect to FTP server.",
    });
  } finally {
    client.close();
  }
});

/* Check LPR */
router.get("/lpr", async (req, res) => {
  setTimeout(() => {
    res.json({
      success: false,
    });
  }, 3000);
});

/* Check Jetson Nano */
router.get("/jetson-nano", async (req, res) => {
  const ipAddress = "8.8.8.8"; // Replace with the actual IP address

  try {
    const pingResult = await ping.promise.probe(ipAddress);

    if (pingResult.alive) {
      res.json({
        success: true,
        message: "Ping successful",
      });
    } else {
      res.json({
        success: false,
        message: "Ping unsuccessful",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* Check Mini PC */
router.get("/mini-pc", async (req, res) => {
  const ipAddress = "8.8.8.8"; // Replace with the actual IP address

  try {
    const pingResult = await ping.promise.probe(ipAddress);

    if (pingResult.alive) {
      res.json({
        success: true,
        message: "Ping successful",
      });
    } else {
      res.json({
        success: false,
        message: "Ping unsuccessful",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* Check MQTT */
router.get("/mqtt", async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to connect to MQTT.",
    });
  }
});

/* Check Printer */
router.get("/printer", async (req, res) => {
  const ipAddress = "8.8.8.8"; // Replace with the actual IP address

  try {
    const pingResult = await ping.promise.probe(ipAddress);

    if (pingResult.alive) {
      res.json({
        success: true,
        message: "Ping successful",
      });
    } else {
      res.json({
        success: false,
        message: "Ping unsuccessful",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* Check Camera In 1 */
router.get("/camera-in-1", async (req, res) => {
  const ipAddress = "8.8.8.8"; // Replace with the actual IP address

  try {
    const pingResult = await ping.promise.probe(ipAddress);

    if (pingResult.alive) {
      res.json({
        success: true,
        message: "Ping successful",
      });
    } else {
      res.json({
        success: false,
        message: "Ping unsuccessful",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* Check Camera In 2 */
router.get("/camera-in-2", async (req, res) => {
  const ipAddress = "8.8.8.8"; // Replace with the actual IP address

  try {
    const pingResult = await ping.promise.probe(ipAddress);

    if (pingResult.alive) {
      res.json({
        success: true,
        message: "Ping successful",
      });
    } else {
      res.json({
        success: false,
        message: "Ping unsuccessful",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* Check Camera Out 1 */
router.get("/camera-out-1", async (req, res) => {
  const ipAddress = "8.8.8.8"; // Replace with the actual IP address

  try {
    const pingResult = await ping.promise.probe(ipAddress);

    if (pingResult.alive) {
      res.json({
        success: true,
        message: "Ping successful",
      });
    } else {
      res.json({
        success: false,
        message: "Ping unsuccessful",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* Check Camera Out 2 */
router.get("/camera-out-2", async (req, res) => {
  const ipAddress = "8.8.8.8"; // Replace with the actual IP address

  try {
    const pingResult = await ping.promise.probe(ipAddress);

    if (pingResult.alive) {
      res.json({
        success: true,
        message: "Ping successful",
      });
    } else {
      res.json({
        success: false,
        message: "Ping unsuccessful",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
