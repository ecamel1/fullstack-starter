import { createAction, handleActions } from 'redux-actions'

const actions = {
  INVENTORY_GET_ALL: 'inventory/get_all',
  CREATE: 'inventory/create',
  UPDATE: 'inventory/update',
  DELETE: 'inventory/delete',
  _PENDING: 'inventory/pending',
  REFRESH:  'inventory/refresh'
}

export let defaultState = {
  all: []
}

export const findInventory = createAction(actions.INVENTORY_GET_ALL, () => {
  //TODO
})

export default handleActions({
  //TODO
}, defaultState)
