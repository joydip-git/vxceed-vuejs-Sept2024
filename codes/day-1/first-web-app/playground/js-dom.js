function call() {
    window.alert('welcome...')
    var para = document.createElement('p')
    para.innerText = 'this is generated dynamically'
    // document.body.appendChild(document.createElement('br'))
    // document.body.appendChild(para)
    document.body.append(
        document.createElement('br'),
        para
    )
}
window.addEventListener(
    'DOMContentLoaded',
    function () {
        console.log('DOM has been loaded...');
        var buttonObject = document.getElementById('btnClick')
        //if (buttonObject)
        buttonObject.addEventListener('click', call)
        //buttonObject.onclick = call
    }
)



var numValue = 10
var nameValue = 'joydip'
var boolValue = true

console.log(typeof numValue, numValue)
console.log(typeof nameValue, nameValue)
console.log(typeof boolValue, boolValue)
console.log(typeof call, call);

numValue = '20'
console.log(typeof numValue, numValue);