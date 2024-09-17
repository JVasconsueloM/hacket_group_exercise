const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist', 'hacket_group_exercise_front', 'browser');
const staticDir = path.join(__dirname, '..', '..', 'hacket_group_exercise_back', 'static');
const templatesDir = path.join(__dirname, '..', '..', 'hacket_group_exercise_back', 'templates', 'data_usa');

if (fs.existsSync(staticDir)) {
  fs.rmSync(staticDir, { recursive: true });
}
fs.mkdirSync(staticDir, { recursive: true });

if (fs.existsSync(templatesDir)) {
  fs.rmSync(templatesDir, { recursive: true });
}
fs.mkdirSync(templatesDir, { recursive: true });

fs.readdir(distDir, (err, files) => {
  if (err) {
    console.error('Error reading dist directory:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(distDir, file);
    if (file === 'index.html') {
      fs.rename(filePath, path.join(templatesDir, file), err => {
        if (err) {
          console.error('Error moving index.html:', err);
        } else {
          console.log('Moved index.html to templates/data_usa');
        }
      });
    } else {
      fs.rename(filePath, path.join(staticDir, file), err => {
        if (err) {
          console.error(`Error moving ${file}:`, err);
        } else {
          console.log(`Moved ${file} to static`);
        }
      });
    }
  });
});
