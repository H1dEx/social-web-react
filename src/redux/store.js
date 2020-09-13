import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer.ts";

let store = {
  _state: {
    profilePage: {
      postsData: [
        {
          id: 1,
          message: "It`s my first post",
          likesCount: 11
        },
        {
          id: 2,
          message: "Im happy",
          likesCount: 32
        },
        {
          id: 3,
          message: "Yo",
          likesCount: 22
        },
        {
          id: 4,
          message: "Yo",
          likesCount: 312
        },
        {
          id: 5,
          message: "Another Yo",
          likesCount: 111
        },
        {
          id: 6,
          message: "Wut???",
          likesCount: 41
        },
        {
          id: 7,
          message: "Rigth, one more Yo",
          likesCount: 71
        }
      ],
      postValue: ""
    },
    messagesPage: {
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
      messageValue: ""
    }
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._callSubscriber(this._state)
  }
};

window.store = store;
export default store;
