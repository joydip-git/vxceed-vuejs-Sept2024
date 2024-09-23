//function global{
const divide = async (a, b) => {
    const res = a / b
    if (res === Infinity) {
        const error = new Error('divisor can not be zero')
        throw err
    }
    return res
}
const add = (a, b) => a + b

/*
const divPromise = divide(12, 3)
divPromise
    .then(
        (data) => {
            console.log(data)
        },
        (err) => { console.log(err) }
    )
*/

async function callDivide() {
    try {
        const data = await divide(12, 3)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
callDivide()

const addRes = add(12, 3)
console.log(addRes);
//}
//global()