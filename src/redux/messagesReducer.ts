import { ActionsTypes, SEND_MESSAGE } from './actions'

type DialogType = {
  id: number
  name: string
}
type MessageType = {
  id: number
  message: string
}

const initialState = {
  dialogsData: [
    {
      id: 1,
      name: 'Alex',
    },
    {
      id: 2,
      name: 'Petr',
    },
    {
      id: 3,
      name: 'Hennadi',
    },
    {
      id: 4,
      name: 'Lena',
    },
    {
      id: 5,
      name: 'Katya',
    },
    {
      id: 6,
      name: 'Gosha',
    },
    {
      id: 7,
      name: 'Polina',
    },
  ] as Array<DialogType>,
  messagesData: [
    {
      id: 1,
      message: 'Hello man',
    },
    {
      id: 2,
      message: 'How are you',
    },
    {
      id: 3,
      message: 'Yo',
    },
    {
      id: 4,
      message: 'Yo',
    },
    {
      id: 5,
      message: 'Nigga',
    },
    {
      id: 6,
      message: 'Wut???',
    },
    {
      id: 7,
      message: 'Im sorry bro',
    },
  ] as Array<MessageType>,
}
export type InitialStateType = typeof initialState

const messagesReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          {
            id: 1,
            message: action.newMessageBody,
          },
        ],
      }
    default:
      return state
  }
}

export default messagesReducer
