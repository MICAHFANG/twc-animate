/**
 * @author Micah Fang
 * @date   2023-04-18 15:37:41
 * @description
 */
import React, { FC, PropsWithChildren } from 'react'

export interface RectProps extends PropsWithChildren {
  className?: string
}

const Rect: FC<RectProps> = ({ children, className }) => {
  return (
    <div
      className={[
        'bg-indigo-700 rounded-lg shadow-lg text-white flex justify-center items-center px-5 py-3 select-none',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export default Rect
