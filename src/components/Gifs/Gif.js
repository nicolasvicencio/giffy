import React from 'react'
import './Gif.css'
import { Link } from 'wouter'

export default function Gif({data}) {
	return (
		<div className='Gif'>
			<div className='Gif-buttons'>
			</div>
			<Link to={`/gif/${data.id}`} className='Gif-link'>
				<h4>{data.title}</h4>
				<img loading='lazy' alt={data.title} src={data.url}/>
			</Link>
		</div>
	)
}
