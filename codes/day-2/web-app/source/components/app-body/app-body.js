export function AppBody() {
    const div = document.createElement('div')
    div.style.fontFamily = 'Segoe UI'

    const firstParaData = 'A component is an unit which describes part of user interface and its associated code'

    const firstPara = document.createElement('p')
    firstPara.innerText = firstParaData

    const secondPara = document.createElement('p')
    secondPara.innerText = 'Angular, React JS , Vue JS all of them uses components to build their application'

    div.append(
        firstPara,
        document.createElement('br'),
        secondPara
    )
    return div
}