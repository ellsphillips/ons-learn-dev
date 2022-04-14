import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin: 2rem;
  height: 100vh;
  overflow: hidden;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 auto;
  width: 100%;
  max-width: 172rem;

  @media only screen and (max-width: 1024px) {
    min-width: 100%;
    margin: 0;
    flex: 1;
  }
`
