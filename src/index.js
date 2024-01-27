const mb = require("mountebank");
const settings = require("./settings");
const helloService = require("./services/hello-service");

const mbServerInstance = mb.create({
  port: settings.port,
  pidfile: "../mb.pid",
  logfile: "../mb.log",
  protofile: "../protofile.json",
  ipWhitelist: ["*"],
});

mbServerInstance.then(function () {
  helloService.addService();
});
