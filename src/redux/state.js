const ADD_POST = 'ADD-POST';
const UPDATE_POST_VALUE = 'UPDATE-POST-VALUE';
const UPDATE_MESSAGE_VALUE = 'UPDATE-MESSAGE-VALUE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state : {
        profilePage : {
            postsData: [{
                id: 1,
                message: 'It`s my first post',
                likesCount: 11
            },
                {
                    id: 2,
                    message: 'Im happy',
                    likesCount: 32
                },
                {
                    id: 3,
                    message: 'Yo',
                    likesCount: 22
                },
                {
                    id: 4,
                    message: 'Yo',
                    likesCount: 312
                },
                {
                    id: 5,
                    message: 'Another Yo',
                    likesCount: 111
                },
                {
                    id: 6,
                    message: 'Wut???',
                    likesCount: 41
                },
                {
                    id: 7,
                    message: 'Rigth, one more Yo',
                    likesCount: 71
                }
            ],
            postValue : 'Imma new post text',
        },
        messagesPage: {
            dialogsData: [{
                id: 1,
                name: 'Alex'
            },
                {
                    id: 2,
                    name: 'Petr'
                },
                {
                    id: 3,
                    name: 'Hennadi'
                },
                {
                    id: 4,
                    name: 'Lena'
                },
                {
                    id: 5,
                    name: 'Katya'
                },
                {
                    id: 6,
                    name: 'Gosha'
                },
                {
                    id: 7,
                    name: 'Polina'
                }
            ],
            messagesData: [{
                id: 1,
                message: 'Hello man'
            },
                {
                    id: 2,
                    message: 'How are you'
                },
                {
                    id: 3,
                    message: 'Yo'
                },
                {
                    id: 4,
                    message: 'Yo'
                },
                {
                    id: 5,
                    message: 'Nigga'
                },
                {
                    id: 6,
                    message: 'Wut???'
                },
                {
                    id: 7,
                    message: 'Im sorry bro'
                }
            ],
            messageValue:'Imma new message text'
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
    if (action.type === UPDATE_POST_VALUE)  {
            this._state.profilePage.postValue = action.postValue;
            this._callSubscriber(this._state);
    } else {
        if (action.type === UPDATE_MESSAGE_VALUE) {
                    this._state.messagesPage.messageValue = action.messageValue;
                    this._callSubscriber(this._state);
            } else if (action.type === ADD_POST) {
                    let newPost = {
                        id: 8,
                        message: action.postContent,
                        likesCount: 0
                    };
                    this._state.profilePage.postsData.push(newPost);
                    this.dispatch({type: UPDATE_POST_VALUE, postValue: ''});
                    this._callSubscriber(this._state);
            } else {
            if (action.type === SEND_MESSAGE) {
                            let newMessage = {
                                id: 1,
                                message: action.messageContent
                            };
                            this._state.messagesPage.messagesData.push(newMessage);
                            this.dispatch({type:UPDATE_MESSAGE_VALUE, messageValue: ''});
                            this._callSubscriber(this._state);
                        }
        }
    }
    }
};

export const addPostActionCreator = (content) => ({type: ADD_POST, postContent: content});
export const updatePostValueActionCreator = (value) =>({type: UPDATE_POST_VALUE, postValue: value});
export const messageChangeActionCreator = (value) => ({type: UPDATE_MESSAGE_VALUE, messageValue: value});
export const sendMessageActionCreator = (content) => ({type: SEND_MESSAGE, messageContent: content});

window.store = store;
export default store;
