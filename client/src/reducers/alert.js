import * as actionTypes from '../actions/types'

const initialState = []

export default function alert(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case actionTypes.SET_ALERT:
      return [...state, payload]
    case actionTypes.REMOVE_ALERT: // REMOVE_ALERT will be sent 5 secs after SET_ALERT with new alert.id. Use filter to remove the alert payload from state.
      return state.filter(alert => alert.id !== payload)
    default:
      return state
  }
}