const fs = require("fs");
function logReqRes(fileName) {
    return (req, res, next) => {
    fs.appendFile(
        fileName,
        ` ${Date.now()} ${req.method}: ${req.ip}: ${req.path}`,
        (err, data) => {
          next();
        }
      );

}
}
module.exports = {
    logReqRes,
};