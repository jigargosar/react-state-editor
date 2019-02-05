import React from 'react'
import { observer } from 'mobx-react-lite'
import { observable } from 'mobx'
import StateTree from './StateTree'
import { LogMessages } from './LogMessages'

const state = observable.object(
  {
    appName: 'State Editor',
    a: 1,
    b: false,
  },
  null,
  { name: 'RootState' },
)

const App = observer(() => {
  const messages = observable.array(['log1 ', 'log2'], {
    name: 'Log Messages',
  })

  return (
    <div className="w-80 center">
      <div className="mv3 f4 ttu tracked">State Editor</div>
      <div className="mv3">State Tree</div>
      <StateTree state={state} />
      <LogMessages messages={messages} />
    </div>
  )
})

App.displayName = 'App'

export default App
