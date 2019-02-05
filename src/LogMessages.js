import { observer } from 'mobx-react-lite'
import React from 'react'

export const LogMessages = observer(({ logStore }) => {
  return (
    <div className="mv3 f7">
      <div className="pv1 b ttu tracked">Logs</div>
      {logStore.messages.map((msg, idx) => (
        <div key={idx} className="pv1 ph2">
          {msg}
        </div>
      ))}
      {<div className="">{'>'}</div>}
    </div>
  )
})

LogMessages.displayName = 'LogMessages'
