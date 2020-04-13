const SEND_MESSAGE = "SEND-MESSAGE";

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
    ],
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
            message: "Nigga"
        },
        {
            id: 6,
            message: "Wut???"
        },
        {
            id: 7,
            message: "Im sorry bro"
        }
    ],
};

const messagesReducer = (state = initialState, action) => {
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

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
