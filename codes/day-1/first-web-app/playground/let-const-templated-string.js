function outer() {
    //console.log(x);//undefined
    let x //var x
    x = 10
    console.log(x);//10
    for (let i = 0; i < 1; i++) {
        let x //var _x
        x = 20
        console.log(x);//20
    }
    console.log(x);//20


    //function declaration
    inner()
    function inner() {
        var x = 100
        console.log(x);
    }
    inner()
    //function expression
    //innerAgain()
    var innerAgain
    innerAgain = function () {
        const x = 200
        const numbers = []
        numbers.push(1)
        //numbers = []
        //x = 100
        //console.log("value of x is " + x);
        //templated string
        console.log(`value of x is ${x >= 100 ? x : 'no value'} `);
    }
    innerAgain()
}
outer();

// var template = '<p>'
//     + 'welcome to template'
//     + '</p>'
var data = 100
var template = `
    <p>Welcome to template</p>
    <br/>
    <span>${data}</span>
`
var div = document.createElement('div')
div.innerHTML = template
document.body.appendChild(div)