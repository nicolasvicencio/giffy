import React, {useContext} from 'react'
import StaticContext from '../../context/StaticContext'

export default function Detail({params}) {
	const context = useContext(StaticContext)
	console.log(context)
	return (
		<div>Detail</div>
	)
}
