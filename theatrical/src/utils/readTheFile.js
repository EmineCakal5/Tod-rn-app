const fs = require('fs');
const path = require('path');

/**
 * Read File
 *
 * @param {string} _area - area
 * @param {string} _path - path
 * @returns {module:JSX.Element} - JSX.Element
 */
function readTheFile(_area, _path) {
  const filepath = fs.readFileSync(path.join('src', 'modules', _area, _path));

  return JSON.parse(filepath);
}

module.exports = readTheFile;
