import React from 'react'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import Spinner from '../../components/Spinner/Spinner'
import useGif from '../../hooks/useGif'

export default function SearchResults({params}) {
	const {keyword} = params
	const {loading, gifs} = useGif({keyword})

	return <>
		{loading
			? <Spinner />
			: <ListOfGifs gifs={gifs}/>
		}
		</>	
}
