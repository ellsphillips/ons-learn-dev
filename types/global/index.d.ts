import React, { ReactNode } from 'react'

declare module '*.svg' {
	const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
	export default ReactComponent
}

export interface ContentConfig {
	home: ReactNode
	about: ReactNode
}
