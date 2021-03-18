import React, { useEffect, useLayoutEffect, useState, useRef } from "react"
import throttle from 'lodash/throttle'
import { StyledGameBoard, StyledCurrentScore, StyledGameBoardContainer } from "./styles"
import { Card } from "./Card"
import { useSelector, useDispatch } from 'react-redux'
import { flipCard, matchCheck, showScoreboard } from '../../redux/actions'

export const GameBoard = () => {
  const { waited, tiles, flippedIndexs, moves, userName } = useSelector((state) => state.gameReducer)
  const [cardHeight, setCardHeight] = useState(196)
  const dispatch = useDispatch()
  const gameBoardRef = useRef(null)


  useLayoutEffect(() => {
    const handleResize = throttle(() => {
      const gameBoardWidth = gameBoardRef.current.getBoundingClientRect().width
      let newCardHeight = cardHeight
      newCardHeight = (gameBoardWidth / 4) - 4
      setCardHeight(newCardHeight)
    }, 200)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    let timeout = null
    if (flippedIndexs.length === 2) {
      timeout = setTimeout(() => {
        dispatch(matchCheck())
      }, 500)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [flippedIndexs])

  useEffect(() => {
    const isEndGame = tiles.every((el) => el.matched === true)
    if (isEndGame) {
      dispatch(showScoreboard(moves, userName))
    }
  }, [tiles])

  const handleClick = (index) => {
    if (!waited) {
      dispatch(flipCard(index))
    }
  }

  const renderCards = () => {
    return tiles.map((el, key) => {
      const isFlipped = el.matched || flippedIndexs.includes(key)
      return (
        <Card
          key={key}
          imgUrl={el.imgUrl}
          isFlipped={isFlipped}
          onClick={() => handleClick(key)}
          matched={el.matched}
          height={cardHeight}
        />
      )
    })
  }

  return (
    <StyledGameBoardContainer>
      <StyledCurrentScore>{`Turn ${moves}`}</StyledCurrentScore>
      <StyledGameBoard ref={gameBoardRef}>
        {renderCards()}
      </StyledGameBoard>
    </StyledGameBoardContainer>

  )
}

