import React, { useState, useReducer, useRef, useCallback } from 'react'
import styled from 'styled-components'

const Seekbar = () => {
  const seekBoundsRef = useRef({ min: 0, max: 0 })
  const [handlePos, dispatchHandlePos] = useReducer((_, touchPos) => {
    const { min: boundMin, max: boundMax } = seekBoundsRef.current
    return Math.max(0, Math.min(boundMax, touchPos) - boundMin)
  }, 0)
  const [isPlaying, setIsPlaying] = useState(true)
  const progressBarRef = useRef(null)

  const handleTouchStart = useCallback((e) => {
    const touchPos = e.touches[0].pageX
    const progressBarRect = progressBarRef.current.getBoundingClientRect()

    seekBoundsRef.current = {
      min: progressBarRect.x,
      max: progressBarRect.x + progressBarRect.width,
    }
    dispatchHandlePos(touchPos)
    setIsPlaying(false)
  }, [])

  const handleTouchMove = useCallback((e) => {
    const touchPos = e.touches[0].pageX
    dispatchHandlePos(touchPos)
  }, [])

  const handleTouchEnd = useCallback(() => {
    setIsPlaying(true)
  }, [])

  return (
    <>
      {isPlaying ? '再生中' : '一時停止中'}
      <Container>
        <ProgressBar
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          ref={progressBarRef}
        />
        <Handle style={{ transform: `translate(${handlePos}px, 0)` }} />
      </Container>
    </>
  )
}

export default Seekbar

const Container = styled.div`
  position: relative;

  width: 16rem;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: #ccc;
`

const Handle = styled.div`
  position: absolute;
  top: -5px;
  left: -6px;

  width: 12px;
  height: 12px;
  border: 1px solid #000;
  border-radius: 50%;
  background: #fff;

  pointer-events: none;
`
