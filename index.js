const inquirer = require('inquirer');
const fs = require('fs');
const test = require('jest');
const {HTML, Shape, Circle, Triangle, Square} = require('./lib/shapes')

function makeSVGfile(data) {
    process.chdir('./lib/SVG');
    fs.writeFile('logo.svg', data, () => console.log('Generated "logo.svg" file.'));
}

function makeHTMLfile(data) {
    process.chdir('I:/Bootcamp/workfolder/Logo-Generator/lib/HTML');
    fs.writeFile('logo.html', data, () => console.log('HTML file created.'));
}



  const questions = [
    {
      type: "input",
      message: "Enter up to three characters",
      name: "text",
    },
    {
      type: "input",
      message: "Enter a color for your text as a keyword or hexadecimal number",
      name: "textcolor",
    },

    {
      type: "input",
      message: "Enter a color keyword or hexadecimal number",
      name: "shapecolor",
    },
    {
      type: "list",
      message: "Select a shape",
      name: "shape",
      choices: ["Circle", "Triangle", "Square"],
    }
]
inquirer

.prompt(questions)

.then((answers) => {

    if((answers.text.length > 3 || answers.text.length === 0)){
        console.log('Must be maximum input of 3, minimum of 1. Try again!');
    return inquirer.prompt(questions)
}

    let newSVG

    if(answers.shape === 'Square'){
        newSVG = new Square()
    }
    if(answers.shape === 'Circle'){
        newSVG = new Circle()
    }
    if(answers.shape === 'Triangle'){
        newSVG = new Triangle()
    }

    const shape = new Shape()
    const renderSVG = shape.render(
        answers.text.toUpperCase(),
        answers.textcolor.toLowerCase(),
        newSVG.shapePath,
        answers.shapecolor.toLowerCase()
    )

    const html = new HTML()
    const renderHtml = html.render(renderSVG)

    makeSVGfile(renderSVG);
    makeHTMLfile(renderHtml);

})
.catch((e) => console.error(e))