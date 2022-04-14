import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Item = styled.div`
  background-color: var(--dark-bg-secondary);
  border-radius: 4pt;
  color: var(--dark-fg);
  font-size: 3rem;
  padding: 1rem;
  margin-inline: 0.5rem;
  cursor: pointer;

  transition: color ease-in-out 150ms, background-color ease-in-out 150ms;

  &:hover {
    background-color: var(--accent-clr);
    color: var(--dark-bg-secondary);
  }
`
