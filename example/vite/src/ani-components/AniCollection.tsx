/**
 * @author Micah Fang
 * @date   2023-04-18 15:53:38
 * @description
 */
import React, { FC, PropsWithChildren } from 'react'

interface AniCollectionProps extends PropsWithChildren {
  title: string
}

const AniCollection: FC<AniCollectionProps> = ({ title, children }) => {
  return (
    <div className="border-b border-b-slate-100 pb-3 mb-3 flex flex-col items-center">
      <h2 className="text-slate-500 font-medium text-lg">{title}</h2>
      <div className="flex gap-10 mt-3 justify-center">{children}</div>
    </div>
  )
}

export default AniCollection
