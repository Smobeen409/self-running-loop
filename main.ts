#!/usr/bin/env node
//Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
import inquirer from "inquirer";
let count=["profile"];
let run=count.length;

async function userData(){
    while(run<=count.length){
let getData=await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"enter your name."
    },
    {
        name:"age",
        type:"number",
        message:"enter your age."
    },
])
let collectDataname=[];
collectDataname.push(getData.name);
let collectDataage=[];
collectDataage.push(getData.age);
console.log(` user name  ${collectDataname} and user age is ${collectDataage}`);

console.log(collectDataname,collectDataage);
}
}
userData();

