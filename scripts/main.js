import { Flowers } from "./Flowers.js"
import { Retailers } from "./Retailers.js"

const container = document.getElementById("container")

const render = async () => {
	const flowersHTML = await Flowers()
	const retailersHTML = await Retailers()

	container.innerHTML = `
    ${flowersHTML}
    ${retailersHTML}
    `
}

render()
