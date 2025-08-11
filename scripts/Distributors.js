import { DistributorsList } from "./DistributorsList.js"

export const Distributors = async () => {
	const distributors = await DistributorsList()

	let html = `
    <section class='retailers-section'>
        <header>
            <h1>Distributors</h1>
        </header>
        <section>
            ${distributors}
        </section>

    </section>
    `
	return html
}
