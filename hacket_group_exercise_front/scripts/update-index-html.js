const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '..', 'dist', 'hacket_group_exercise_front', 'browser', 'index.html');
fs.readFile(indexPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading index.html:', err);
    return;
  }

  const updatedData = data.replace(/(href|src)="(?!https:\/\/|\/static\/)([^"]+)"/g, (match, p1, p2) => {
    // Avoid modifying <base href="/">
    if (p2 === '/') return match; // If the path is empty, don't modify

    return `${p1}="/static/${p2}"`;
  });

  fs.writeFile(indexPath, updatedData, 'utf8', err => {
    if (err) {
      console.error('Error writing index.html:', err);
    } else {
      console.log('index.html updated successfully');
    }
  });
});
