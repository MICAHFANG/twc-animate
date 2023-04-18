import React from 'react'
import Rect from './Rect'
import Ani from './Ani'
import AniCollection from './AniCollection'

const Shake = () => {
  return (
    <AniCollection title="Shake animation (hover to trigger animate)">
      <Ani code=".ani-shake">
        <Rect className="hover:ani-shake">spin shake</Rect>
      </Ani>
      <Ani code=".ani-shake-horizontal">
        <Rect className="hover:ani-shake-horizontal">horizontal shake</Rect>
      </Ani>
      <Ani code=".ani-shake-vertical">
        <Rect className="hover:ani-shake-vertical">vertical shake</Rect>
      </Ani>
    </AniCollection>
  )
}

export default Shake
