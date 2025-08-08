import { RetailersList } from "./RetailersList.js"

export const Retailers = async () => {
	const retailersHTML = await RetailersList()
	let html = `
    <section class='retailers-section'>
        <header>
            <h1>Retailers</h1>
        </header>
        <section>
            ${retailersHTML}
        </section>

    </section>
    `
	return html
}
