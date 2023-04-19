import React from 'react'
import AniCollection from './AniCollection'
import Ani from './Ani'
import Rect from './Rect'

const Flicker = () => {
  return (
    <AniCollection title="Flicker animations (hover to trigger)">
      <Ani code=".ani-flicker">
        <Rect className="hover:ani-flicker">Flicker ltr</Rect>
      </Ani>
      <Ani code=".ani-flicker-rtl">
        <Rect className="hover:ani-flicker-rtl">Flicker rtl</Rect>
      </Ani>
    </AniCollection>
  )
}

export default Flicker
