import { FlowersList } from "./FlowersList.js"

export const Flowers = async () => {
	const flowersListHTML = await FlowersList()
	let html = `
    <section class='flowers-section'>
        <header>
            <h1>Flowers</h1>
        </header>
		<section>
            ${flowersListHTML}
        </section>
    </section>
    `

	return html
}
