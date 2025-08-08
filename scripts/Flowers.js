export const Flowers = async () => {
	const response = await fetch("http://localhost:8088/flowers")
	const flowers = await response.json()

	const flowersHTML = flowers
		.map(flower => {
			return `
        <header>
            <h1>${flower.commonName}</h1>
        </header>
        `
		})
		.join("")

	return flowersHTML
}
