/**
 * @author Micah Fang
 * @date   2023-04-18 15:55:12
 * @description
 */
import React from 'react'
import AniCollection from './AniCollection'
import Ani from './Ani'
import Rect from './Rect'

const Ripple = () => {
  return (
    <AniCollection title="Ripple animation">
      <Ani code=".ani-ripple">
        <Rect className="!bg-indigo-300 !text-slate-800 ani-ripple ani-count-infinite">
          Ripple
        </Rect>
      </Ani>
      <Ani code=".ani-ripple">
        <Rect className="ani-ripple ani-count-infinite">Ripple</Rect>
      </Ani>
    </AniCollection>
  )
}

export default Ripple
