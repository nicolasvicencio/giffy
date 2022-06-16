import React, {useState, useEffect} from 'react'
import getGifs from '../services/getGifs'

export default function useGif({keyword} = {keyword: null}) {
	const [loading, setLoading] = useState(false)
	const [gifs, setGifs] = useState([])
	
	const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

	useEffect(() => {
		setLoading(true)
		getGifs({keyword : keywordToUse })
			.then(gifs => {
				setLoading(false)
				setGifs(gifs)
				localStorage.setItem('lastKeyword', keyword)
			})
	},[keyword])

	return {loading, gifs}
}
