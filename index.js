const inquirer = require('inquirer');
const fs = require ('fs');
const {Shapes, Square, Triangle, Circle} = require('./lib/shapes.js');
const fileName = './examples/logo.svg';

const questions = ()=> {
return inquirer.prompt ([
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 Characters for logo"
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter the color of logo text"
    },
    {
        type: "list",
        name: "shape",
        message: "Enter shape of logo",
        choices : [
            "circle",
            "triangle",
            "square",

        ],
    },
    {
        type: "input",
        name: "setColor",
        message: "Enter color of logo shape"
    },
])

.then(({text, textColor, shape, setColor}) =>{
    if (text.length >3){
        console.log("Logo can only contain 3 characters");
        return questions();
    }else{
        const answers = new Shapes(shape, text, textColor, setColor);
        const data = answers.render();
        fs.writeFile(fileName,data,(err)=>
        err ? console.log(err) : console.log ('New svg created !!!'));
    }
})

.catch((err) => console.error(err));

};



questions();
