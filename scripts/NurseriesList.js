export const NurseriesList = async () => {
	const response = await fetch("http://localhost:8088/nurseries")
	const nurseries = await response.json()

	const response2 = await fetch(
		"http://localhost:8088/flowerExchanges?_expand=nursery&_expand=flowerDistributor&_expand=flower"
	)
	const bridges = await response2.json()

	let html = ``

	// map nurseries
	const nurseryHTML = nurseries
		.map(nursery => {
			// find the distributors and flowers they can sell
			let nurseryList = `<h2>${nursery.name}</h2>`

			const flowerDistributor = bridges
				.filter(bridge => bridge.nurseryId === nursery.id)
				.map(filtered => `<li>${filtered.flowerDistributor.name}</li>`)
				.join("")

			const flowers = bridges
				.filter(bridge => bridge.nurseryId === nursery.id)
				.map(filtered => `<li>${filtered.flower.commonName}</li>`)
				.join("")

			nurseryList += `
			<h3>Our Distributors</h3>
			<ul>
            	${flowerDistributor}
			</ul>
			<h3>Flowers We Sell</h3>
			<ul>
            	${flowers}
			</ul>
            `
			return nurseryList
		})
		.join("")

	return (html += `
        ${nurseryHTML}
    </ul>
    `)
}
