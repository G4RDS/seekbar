import React from 'react'
import styled from 'styled-components'

import Seekbar from './components/Seekbar'

function App() {
  return (
    <Container>
      <Seekbar />
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
`
