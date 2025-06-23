const fs=require("fs");

//Blocking Synchrnous
const text=fs.readFileSync('./starter/txt/input.txt','utf-8');
console.log(text);
const wtext=`This is Avocado Description :${text}`;
fs.writeFileSync("./starter/txt/gokul.txt",wtext);
console.log('file written');

//NON-Blocking.asynchronous
fs.readFile("./starter/txt/start.txt",'utf-8',(err,data1)=>
{
    fs.readFile(`./starter/txt/${data1}.txt`,'utf-8',(err,data2)=>
{
    console.log(data2);
})
});
const data="Bankai !!!1"
fs.writeFile('./starter/txt/bankai.txt',data,'utf-8',err=>
    {
        console.log("File created");

    }
)
console.log('read file');//This will excute first 


