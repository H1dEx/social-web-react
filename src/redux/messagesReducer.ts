const SEND_MESSAGE = "SEND-MESSAGE";

type dialogType = {
    id: number
    name: string
}

type messageType = {
    id: number
    message: string
}

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: "Alex"
        },
        {
            id: 2,
            name: "Petr"
        },
        {
            id: 3,
            name: "Hennadi"
        },
        {
            id: 4,
            name: "Lena"
        },
        {
            id: 5,
            name: "Katya"
        },
        {
            id: 6,
            name: "Gosha"
        },
        {
            id: 7,
            name: "Polina"
        }
    ] as Array<dialogType>,
    messagesData: [
        {
            id: 1,
            message: "Hello man"
        },
        {
            id: 2,
            message: "How are you"
        },
        {
            id: 3,
            message: "Yo"
        },
        {
            id: 4,
            message: "Yo"
        },
        {
            id: 5,
            message: "MAN"
        },
        {
            id: 6,
            message: "Wut???"
        },
        {
            id: 7,
            message: "Im sorry bro"
        }
    ] as Array<messageType>,
};

type initialStateType = typeof initialState

const messagesReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 1,
                message: action.newMessageBody
            };
            return {...state, messagesData: [...state.messagesData, newMessage]};
        default:
            return state;
    }
};

export default messagesReducer;

type sendMessageActionCreatorType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessageActionCreator = (newMessageBody: string): sendMessageActionCreatorType => ({
    type: SEND_MESSAGE,
    newMessageBody
});
