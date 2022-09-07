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
  all: [],
  fetched: false,
}

export const findInventory = createAction(actions.INVENTORY_GET_ALL, () => {
  (dispatch, getState, config) => axios
	.get(`${config.restAPIUrl}/inventory`)
	.then((suc) => dispatch(refreshInventory(suc.data)))
})

export const createInventory = createAction(actions.CREATE, () => {

})

export const updateInventory = createAction(actions.UPDATE, () => {

})

export const deleteInventory = createAction(actions.DELETE, () => {

})

export const pendingInventory = createAction(actions._PENDING, () => {

})

export const refreshInventory = createAction(actions.REFRESH, () => {

})

export default handleActions({
  //TODO
}, defaultState)
