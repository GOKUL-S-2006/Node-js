const fs=require("fs");
const text=fs.readFileSync('./starter/txt/input.txt','utf-8');
console.log(text);
const wtext=`This is Avocado Description :${text}`;
fs.writeFileSync("./starter/txt/gokul.txt",wtext);
console.log('file written');


