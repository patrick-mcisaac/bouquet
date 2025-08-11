export const DistributorsList = async () => {
	const response = await fetch("http://localhost:8088/flowerDistributors")
	const distributors = await response.json()

	let html = `
    <ul>
    `
	const distributorsHTML = distributors
		.map(distributor => `<li>${distributor.name}</li>`)
		.join("")

	return (html += `
        ${distributorsHTML}
    </ul>
    `)
}
