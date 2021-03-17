import React, { useEffect } from "react"
import { StyledGameBoard } from "./styles"
import { Card } from "./Card";
import { useSelector, useDispatch } from 'react-redux';
import { flipCard, matchCheck } from '../../redux/actions';

export const GameBoard = () => {
  const { waited, tiles, flippedIndexs } = useSelector((state) => state.gameReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    let timeout = null
    if (flippedIndexs.length === 2) {
      timeout = setTimeout(() => {
        dispatch(matchCheck())
      }, 700)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [flippedIndexs])

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
        />
      )
    })
  }

  return (
    <StyledGameBoard>
      {renderCards()}
    </StyledGameBoard>
  )
}

