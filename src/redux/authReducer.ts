import { stopSubmit } from 'redux-form'
import { ResultCodeEnum } from '../api/api'
import { ThunkType } from './reduxStore'
import { authAPI } from '../api/auth-api'
import { actions, ActionsTypes, SET_USER_DATA } from './actions'

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
}

export type InitialStateType = typeof initialState

const authReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

export default authReducer

export const authorize = (): ThunkType => async (dispatch) => {
  const response = await authAPI.me()
  if (response.resultCode === ResultCodeEnum.Success) {
    const { id, login, email } = response.data
    dispatch(actions.setUserData(id, email, login, true))
  }
}
export const login = ({
  email,
  password,
  rememberMe,
}: {
  email: string
  password: string
  rememberMe: boolean
}): ThunkType => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe)
  if (response.resultCode === ResultCodeEnum.Success) {
    dispatch(authorize())
  } else {
    const message =
      response.messages.length > 0 ? response.messages[0] : 'Some error'
    dispatch(stopSubmit('login', { _error: message }) as any)
  }
}

export const logout = (): ThunkType => async (dispatch) => {
  const response = await authAPI.logout()
  if (response.resultCode === 0) {
    dispatch(dispatch(actions.setUserData(null, null, null, false)))
  }
}
