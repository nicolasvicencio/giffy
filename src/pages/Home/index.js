import React, {useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs/ListOfGifs'
import useGif from '../../hooks/useGif'

const POPULAR_GIFS = ['Programming', 'Cats', 'Pandas', 'Memes']

export default function Home() {
	const [keyword, setKeyword] = useState('')
	const [path, push] = useLocation()
	
	const {loading, gifs} = useGif({keyword})

	const handleSubmit = event => {
		event.preventDefault()
		push(`/search/${keyword}`)
	}

	const handleChange = event => {
		setKeyword(event.target.value)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input placeholder='Search gifs' onChange={handleChange} type={'text'} value={keyword} />
				<button>Search</button>
			</form>
			<h3 className='App-title'>Last Search</h3>
			<ListOfGifs gifs={gifs}/>
			<h3 className='App-title'>Popular Gifs</h3>
			<ul>
				{
					POPULAR_GIFS.map(el => (
						<li key={el}>
							<Link to={`/search/${el}`}>{el} Gifs
							</Link>
						</li>
					))}
			</ul>
		</>
	)
}
