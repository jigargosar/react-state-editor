import React from 'react'
import { observer } from 'mobx-react-lite'
import { observable } from 'mobx'
import StateTree from './StateTree'

const state = observable.object({
  appName: 'State Editor',
  a: 1,
  b: false,
})

const App = observer(() => {
  return (
    <div className="w-80 center">
      <div className="mv3 f4 ttu tracked">State Editor</div>
      <div className="mv3">State Tree</div>
      <StateTree state={state} />
    </div>
  )
})

App.displayName = 'App'

export default App
