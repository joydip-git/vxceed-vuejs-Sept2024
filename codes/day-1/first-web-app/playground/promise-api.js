const divide = (a, b) => {
    const p = new Promise(
        (refToResolveFn, refToRejectFn) => {
            const res = a / b
            if (res === Infinity) {
                const error = new Error('divisor can not be zero')
                refToRejectFn(error)
            }
            refToResolveFn(res)
        }
    )
    return p
}
const add = (a, b) => a + b

const divPromise = divide(12, 3)
divPromise
    .then(
        (data) => {
            console.log(data)
        },
        (err) => { console.log(err) }
    )

const addRes = add(12, 3)
console.log(addRes);