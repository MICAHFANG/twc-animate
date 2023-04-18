import React from 'react'
import AniCollection from './AniCollection'
import Ani from './Ani'
import Rect from './Rect'

const Breath = () => {
  return (
    <AniCollection title="Breath animation">
      <Ani code=".ani-breath">
        <Rect className="ani-breath">Breath</Rect>
      </Ani>
    </AniCollection>
  )
}

export default Breath
