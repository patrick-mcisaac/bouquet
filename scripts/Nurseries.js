import { NurseriesList } from "./NurseriesList.js"

export const Nurseries = async () => {
	const nurseryList = await NurseriesList()

	let html = `
    <section class='flowers-section'>
        <header>
            <h1>Nurseries</h1>
        </header>
		<section>
            ${nurseryList}
        </section>
    </section>
    `
	return html
}
