export const FlowersList = async () => {
	const response = await fetch("http://localhost:8088/flowers")
	const flowers = await response.json()

	// refactor
	let html = `
    <ul>
    `

	const flowersHTML = flowers
		.map(flower => {
			return `
            <li>${flower.commonName}</li>
        `
		})
		.join("")

	html += `
            ${flowersHTML}
        </ul>
        `
	return html
}
