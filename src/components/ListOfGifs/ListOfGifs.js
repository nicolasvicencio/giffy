import React from 'react'
import Gif from '../Gifs/Gif'
import './ListOfGifs.css'

export default function ListOfGifs({gifs}) {
	return (
		<div className='ListOfGifs'>
			{
				gifs.map(gif => <Gif data={gif} key={gif.id} />)
			}
		</div>
	)
}
