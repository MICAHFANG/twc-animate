import React, { FC, PropsWithChildren } from 'react'

interface AniProps extends PropsWithChildren {
  code: string
}

const Ani: FC<AniProps> = ({ code, children }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      {children}
      <div className="font-mono text-sm text-slate-400">{code}</div>
    </div>
  )
}

export default Ani
