const fs = require('fs');
let content = fs.readFileSync('D:/Managescore/app.js', 'utf8');

const regex = /const isKm = appState\.language === 'km';[\s\S]*?\/\/ Daily\/Weekly will now use the standard Grade Distribution below\./;

content = content.replace(regex, "const isKm = appState.language === 'km';\n\n    // Daily/Weekly will now use the standard Grade Distribution below.");

fs.writeFileSync('D:/Managescore/app.js', content);
console.log('Fixed syntax in app.js');
