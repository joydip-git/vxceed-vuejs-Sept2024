//=== -> strict equality
//!== -> string in-equality`
//numbers.push(10, 20)
//numbers.splice(1, 2)
//numbers.splice(1, 2, 20)

function filterValues(arr, fnRef) {
    var evenResult = []

    for (var element of arr) {
        //if (element % 2 === 0)
        if (fnRef(element))
            evenResult.push(element)
    }

    return evenResult
}
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function isEven(num) {
    return num % 2 === 0;
}
var result = filterValues(numbers, isEven)
for (var item of result) {
    console.log(item);
}

var oddNumbers = filterValues(
    numbers,
    function (num) {
        return num % 2 !== 0
    }
)
for (const e of oddNumbers) {
    console.log(e);
}
var people = ['anil', 'sunil', 'joydip']
var filteredNames = filterValues(
    people,
    (name) =>
        name.toLocaleLowerCase().includes('n')
    // function (name) {
    //     return name.toLocaleLowerCase().includes('n')
    //     //return name.toLocaleLowerCase().indexOf('n')!==-1
    // }
)
for (const n of filteredNames) {
    console.log(n);
}

numbers
    .sort(
        function (a, b) {
            return b - a
        }
    )
numbers.forEach(
    function (num) {
        console.log(num);
    }
)
numbers
    .filter(n => n > 5)
    .map(
        function (num) {
            return num * 2
        }
    )
    .forEach(n => console.log(n))
//console.log(global);
