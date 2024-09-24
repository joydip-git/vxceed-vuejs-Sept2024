export function AppHeader() {
    // const message = 'Welcome to Components'
    // const h = `
    //     <h2 style="background-color:'burlywood';border-radius:5px">${message}</h2>
    // `
    const header = document.createElement('h2')
    header.innerText = 'Welcome to Components'

    header.style.backgroundColor = 'burlywood'
    header.style.borderRadius = '5px'


    header.addEventListener(
        'mouseover',
        (e) => {
            header.innerText = 'Introduction to components'
        }
    )

    return header
}