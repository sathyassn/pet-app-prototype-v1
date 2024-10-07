const fs = require('fs');
const path = require('path');

function deleteCssFiles(directory) {
  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      deleteCssFiles(fullPath);
    } else if (path.extname(fullPath) === '.css') {
      fs.unlinkSync(fullPath);
      console.log(`Deleted: ${fullPath}`);
    }
  });
}

deleteCssFiles('src');
console.log('CSS files removal complete.');