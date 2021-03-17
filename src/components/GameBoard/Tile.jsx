import React from "react"
import { StyledTile, StyledTileImg } from "./styles"

export const Tile = ({ imgUrl }) => {
  return (
    <>
      <StyledTile>
        <StyledTileImg src={imgUrl} />
      </StyledTile>
    </>
  )
}
