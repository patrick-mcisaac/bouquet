import { Flowers } from "./Flowers.js"

const container = document.getElementById("container")

const render = async () => {
	const flowersHTML = await Flowers()

	container.innerHTML = `
    ${flowersHTML}
    `
}

render()
