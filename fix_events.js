const fs = require('fs');
let content = fs.readFileSync('D:/Managescore/app.js', 'utf8');

// Replace function declaration
content = content.replace(/function setupEventListeners\(\) \{/, `function setupEventListeners() {\n    const safeBind = (id, evt, cb) => {\n        const el = document.getElementById(id);\n        if (el) el.addEventListener(evt, cb);\n        else console.warn('safeBind: element not found -> ' + id);\n    };`);

// Replace document.getElementById("...").addEventListener("...", ...)
// Regex matches: document.getElementById("someId").addEventListener("someEvent", someCallback);
content = content.replace(/document\.getElementById\("([^"]+)"\)\.addEventListener\("([^"]+)",\s*([^)]+(?:\)[^;]*)?)\);/g, 'safeBind("$1", "$2", $3);');

// For arrow functions like: document.getElementById("btnPrintReport").addEventListener("click", () => { ... });
// The above regex might only capture part of the callback. 
// A safer approach: only replace the known academic report ones!

fs.writeFileSync('D:/Managescore/app.js.tmp', content);
console.log("Done");
