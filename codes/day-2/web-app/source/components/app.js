import { AppBody } from "./app-body/app-body";
import { AppHeader } from "./app-header/app-header";

export function App() {
    const headerDesign = AppHeader()
    const bodyDesign = AppBody()

    const container = document.createElement('div')
    container.append(headerDesign, bodyDesign)

    return container
}