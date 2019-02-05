import React from 'react'
import { observer } from 'mobx-react-lite'

const App = observer(() => {
  return (
    <div className="w-80 center">
      <div className="mv3 f4 ttu tracked">State Editor</div>
      <div className="mv3">State Tree</div>
    </div>
  )
})

App.displayName = 'App'

export default App
