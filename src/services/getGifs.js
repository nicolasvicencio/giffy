import React from 'react'

const apiKey = 'firYpWqdQ4zhDvnYAxsA3gAiyzNW4pyQ'

const getGifs = async({keyword = 'panda'}) => {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`


	const getData = await fetch(apiURL)
	const res = await getData.json()
	const {data = []} = res
	if(!Array.isArray(data)) return console.log('An error has ocurred')
	const gifs = data.map(el => {
		const {title, id} = el
		const url = el.images.downsized_medium.url	
		return {title, id, url}
	})
	return gifs
}

export default getGifs