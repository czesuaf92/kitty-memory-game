import React from "react"
import { StyledGameBoard } from "./styles"
import { Tile } from "./Tile";
import { useSelector } from 'react-redux';

export const GameBoard = () => {
  const tiles = useSelector((state) => state.gameReducer.tiles)

  const renderTiles = () => {
    return tiles.map((el, key) => {
      return (<Tile key={key} imgUrl={el.imgUrl}></Tile>)
    })
  }

  return (
    <StyledGameBoard>
      {renderTiles()}
    </StyledGameBoard>
  )
}

