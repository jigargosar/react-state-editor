import React from 'react'
import { observer } from 'mobx-react-lite'
import * as R from 'ramda'

const StateTree = observer(({ state }) => {
  return (
    <>
      <div className="">Root Keys : [{R.keys(state).join(', ')}]</div>
      <div className="">Root Values : [{R.values(state).join(', ')}]</div>
    </>
  )
})

StateTree.displayName = 'StateTree'

export default StateTree
