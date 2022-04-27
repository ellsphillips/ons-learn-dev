import React from 'react'

interface ThingProps {
	header: string
}

const Thing = (props: ThingProps) => {
	return <h1>{props.header}</h1>
}

export default Thing
