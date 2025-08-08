export const RetailersList = async () => {
	const response = await fetch("http://localhost:8088/flowerRetailers")
	const retailers = await response.json()

	let html = `
    <ul>
    `

	const retailersHTML = retailers
		.map(retailer => `<li>${retailer.name}</li>`)
		.join("")

	html += `
        ${retailersHTML}
    </ul>
    `
	return html
}
