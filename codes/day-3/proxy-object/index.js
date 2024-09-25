//let x = 10

const xData = {
    x: 0
}
const proxyforData = new Proxy(
    {
        name: "anil",
    },
    {
        get: (target, prop) => {
            if (target.hasOwnProperty(prop)) {
                if (prop === "name")
                    return target[prop]
                else
                    throw new Error()
            } else
                throw new Error(`${prop} does not exits on target`)
        },
        set: (target, prop, newValue) => {
            if (target.hasOwnProperty(prop)) {
                Reflect.set(target, prop, newValue)
                return true
            }
            else
                return false
        }
    }
)

console.log(proxyforData.name);
proxyforData.name = "anil kumar"
console.log(proxyforData.name);

/*
const p = new Proxy(
    xData,
    {
        get(target, prop) {
            return target[prop]
        },
        set(target, prop, value) {
            if (prop === "x") {
                Reflect.set(target, prop, value)
                return true
            }
            else
                return false
        }
    }
)

// const span = document.createElement('span')
// span.innerText = p.x
// document.body.appendChild(span)

document.getElementById('btn').addEventListener('click',
    () => {
        p.x += 1
        console.log(p.x);
    }
)
*/