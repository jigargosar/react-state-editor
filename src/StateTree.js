import React, { Fragment } from 'react'
import { observer } from 'mobx-react-lite'
import * as R from 'ramda'

const KeyValue = observer(({ state }) => {
  return (
    <>
      {R.pipe(
        R.mapObjIndexed(renderKV),
        R.values,
      )(state)}
    </>
  )

  function renderKV(v, k) {
    return (
      <Fragment key={k}>
        <div className="dt-row">
          <div className="dtc pa1 ">{`${k}`}</div>
          <div className="dtc pa1">{`${v}`}</div>
        </div>
      </Fragment>
    )
  }
})

KeyValue.displayName = 'KeyValue'

const StateTree = observer(({ state }) => {
  return (
    <>
      <KeyValue state={state} />
      <div className="">Root Keys : [{R.keys(state).join(', ')}]</div>
      <div className="">Root Values : [{R.values(state).join(', ')}]</div>
    </>
  )
})

StateTree.displayName = 'StateTree'

export default StateTree
