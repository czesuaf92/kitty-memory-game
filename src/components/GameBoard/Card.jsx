import React from "react"
import { StyledCard, StyledCardImg, StyledCardContent, StyledCardFront, StyledCardBack } from "./styles"

export const Card = ({ imgUrl, isFlipped, onClick, height }) => {
  return (
    <StyledCard onClick={onClick} isFlipped={isFlipped} height={height}>
      <StyledCardContent>
        <StyledCardFront>
          <StyledCardImg src={imgUrl} />
        </StyledCardFront>
        <StyledCardBack>
          <StyledCardImg src='assets/img/back.png' />
        </StyledCardBack>
      </StyledCardContent>
    </StyledCard>
  )
}
