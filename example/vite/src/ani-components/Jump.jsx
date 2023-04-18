import React from 'react'
import AniCollection from './AniCollection'
import Ani from './Ani'
import Rect from './Rect'

const Jump = () => {
  return (
    <AniCollection title="Jump animation (hover to trigger)">
      <Ani code=".ani-jump">
        <Rect className="group-hover:ani-jump ani-count-infinite">Jump</Rect>
      </Ani>
    </AniCollection>
  )
}

export default Jump
