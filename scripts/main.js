import { Flowers } from "./Flowers.js"
import { Retailers } from "./Retailers.js"
import { Distributors } from "./Distributors.js"
import { Nurseries } from "./Nurseries.js"

const container = document.getElementById("container")

const render = async () => {
	const flowersHTML = await Flowers()
	const retailersHTML = await Retailers()
	const distributorsHTML = await Distributors()
	const nurseryHTML = await Nurseries()

	container.innerHTML = `
    ${flowersHTML}
    ${retailersHTML}
    ${distributorsHTML}
    ${nurseryHTML}
    `
}

render()
