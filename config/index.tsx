import React, { ReactNode } from 'react'
import AboutContent from './content/about'
import HomeContent from './content/home'

export const CONTENT: Record<string, ReactNode> = {
	home: <HomeContent />,
	about: <AboutContent />,
}
