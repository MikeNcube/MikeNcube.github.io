const fs = require('fs');
let p = fs.readFileSync('app/page.tsx', 'utf8');
p = p.replace('const send = async (text: string)', 'const send = async (text: string = "")');
p = p.replace('e.key === "Enter" && send()', 'e.key === "Enter" && send(input)');
p = p.replace("e.key === 'Enter' && send()", "e.key === 'Enter' && send(input)");
p = p.replace('onClick={() => send()}', 'onClick={() => send(input)}');
fs.writeFileSync('app/page.tsx', p, 'utf8');
console.log('Done!');
