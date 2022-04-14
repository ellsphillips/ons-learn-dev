import React, { useEffect, useState } from 'react'
import GlobalStyles from '../../styles/global'
import * as ThemeButton from './styles'

interface ThemeTogglerProps {
  themeToggler: () => void
}

function TogglerButton({ themeToggler }: ThemeTogglerProps) {
  const [hasMounted, setHasMounted] = React.useState(false)
  const [prefersDark, setPrefersDark] = useState<boolean>(true)

  useEffect(() => {
    setHasMounted(true)
    setPrefersDark(window.localStorage.getItem('theme') === 'dark')
  }, [themeToggler])

  if (!hasMounted) {
    return null
  }

  return (
    <ThemeButton.Wrapper>
      <ThemeButton.Label htmlFor="checkbox">
        <GlobalStyles />
        <input
          id="checkbox"
          type="checkbox"
          onClick={themeToggler}
          onChange={() => false}
          checked={prefersDark}
        />
        <ThemeButton.Slider />
      </ThemeButton.Label>
    </ThemeButton.Wrapper>
  )
}

export default TogglerButton
