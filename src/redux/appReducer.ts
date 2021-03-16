import { ThunkAction } from 'redux-thunk'
import { authorize } from './authReducer'
import { AppStateType } from './reduxStore'
import { actions, ActionsTypes, INITIALIZED_SUCCESS } from './actions'

const initialState = {
  initialized: false,
}

type InitialStateType = typeof initialState

const appReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export default appReducer

export const initializeApp = (): ThunkAction<
  void,
  AppStateType,
  any,
  ActionsTypes
> => async (dispatch) => {
  await dispatch(authorize())
  dispatch(actions.initializedSuccess())
}
