import React, { useState } from 'react'
import styled from 'styled-components'

const InputSeekbar = () => {
  const [handlePos, setHandlePos] = useState(0)

  const handlePosChange = (e) => {
    setHandlePos(e.target.value)
  }

  const onTouchStart = (e) => {
    console.log('touch-start')
  }

  const onTouchEnd = (e) => {
    console.log('touch-end')
  }

  return (
    <Container>
      <StyledInput
        value={handlePos}
        onChange={handlePosChange}
        onMouseDown={onTouchStart}
        onTouchStart={onTouchStart}
        onMouseUp={onTouchEnd}
        onTouchEnd={onTouchEnd}
        type="range"
        min={0}
        max={300}
      />
    </Container>
  )
}

export default InputSeekbar

const Container = styled.div`
  pos: relative;

  width: 16rem;
  margin-top: 4rem;
`

const StyledInput = styled.input`
  width: 100%;
`
