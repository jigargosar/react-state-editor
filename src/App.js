import React from 'react'
import { observer } from 'mobx-react-lite'
import { extendObservable, observable } from 'mobx'
import StateTree from './StateTree'
import { LogMessages } from './LogMessages'
import * as R from 'ramda'

const state = observable.object(
  {
    appName: 'Title: State Editor',
    a: 1,
    b: false,
  },
  null,
  { name: 'RootState' },
)

const logStore = (() => {
  const store = observable.object(
    { messages: observable.array([]) },
    null,
    { name: 'LogStore' },
  )

  return extendObservable(store, {
    get isEmpty() {
      return R.isEmpty(store.messages)
    },
  })
})()

const App = observer(() => {
  return (
    <div className="w-80 center">
      <div className="mv3 f4 ttu tracked">State Editor</div>
      <div className="mv3">State Tree</div>
      <StateTree state={state} />
      <LogMessages logStore={logStore} />
    </div>
  )
})

App.displayName = 'App'

export default App
