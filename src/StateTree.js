import React from 'react'
import { observer } from 'mobx-react-lite'
import * as R from 'ramda'

const StateTree = observer(({ state }) => {
  return <div className="">{R.keys(state)}</div>
})

StateTree.displayName = 'StateTree'

export default StateTree
