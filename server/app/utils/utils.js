
const path = require('path');
const setPath = (approot, pathStr) => {
    return path.join(approot, pathStr);
}

module.exports = {
    setPath
}