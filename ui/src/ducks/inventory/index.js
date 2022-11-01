import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'

const actions = {
  INVENTORY_GET_ALL: 'inventory/get_all',
  CREATE: 'inventory/create',
  UPDATE: 'inventory/update',
  DELETE: 'inventory/delete',
  PENDING: 'inventory/pending',
  REFRESH:  'inventory/refresh'
}

export let defaultState = {
  all: [],
  fetched: false,
}

export const findInventory = createAction(actions.INVENTORY_GET_ALL, () => (
  (dispatch, getState, config) => axios
	.get(`${config.restAPIUrl}/inventory`)
	.then((suc) => dispatch(refreshInventory(suc.data)))
))

export const createInventory = createAction(actions.CREATE, (inventory) => (
  (dispatch, getState, config) => axios
        .post(`${config.restAPIUrl}/inventory`, inventory)
        .then((suc) => {
          const invs = []
          getState().inventorys.all.forEach(inv => {
            if (inv.id !== suc.data.id) {
              invs.push(inv)
            }
          })
      invs.push(suc.data)
      dispatch(refreshInventory(invs))
      })
))

export const deleteInventory = createAction(actions.DELETE, (ids) => (
  (dispatch, getState, config) => axios
    .delete(`${config.restAPIUrl}/inventory`, { data: ids })
    .then((suc) => {
      const invs = []
      getState().inventory.all.forEach(inv => {
        if (!ids.includes(inv.id)) {
          invs.push(inv)
        }
      })
      dispatch(refreshInventory(invs))
   })
))


export const refreshInventory = createAction(actions.REFRESH, (payload) =>
  (dispatcher, getState, config) =>
    payload.sort((inventoryA, inventoryB) => inventoryA.name < inventoryB.name ? -1 : inventoryA.name > inventoryB.name ? 1 : 0)
)

export default handleActions({
  [actions.PENDING]: (state) => ({
    ...state,
    fetched: false
  }),
  [actions.REFRESH]: (state, action) => ({
    ...state,
    all: action.payload,
    fetched: true,
  })
}, defaultState)
