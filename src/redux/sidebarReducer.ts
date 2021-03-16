import { ActionsTypes } from './actions'

const initialState = {}
export type InitialStateType = typeof initialState

const sidebarReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => state
export default sidebarReducer
