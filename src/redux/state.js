// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sidebar-reducer ";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY ';
// const SEND_MESSAGE = 'SEND-MESSAGE';


// let store = {
//   _state: {
//     profilePage:
//     {
//       posts: [
//         { id: 1, message: 'Привет', likesCount: 12 },
//         { id: 2, message: 'Хеллоу?', likesCount: 13 },
//         { id: 3, message: 'Йоу', likesCount: 15 }

//       ],
//       newPostText: ""

//     },


//     dialogsPage: {
//       messages: [
//         { id: 1, message: 'Привет' },
//         { id: 2, message: 'Как дела?' },
//         { id: 3, message: 'Что делаешь?' }
//       ],
//       dialogs: [
//         { id: 1, name: 'Настя' },
//         { id: 2, name: 'Вадим' },
//         { id: 3, name: 'Андрей' },
//         { id: 4, name: 'Егор' }
//       ],
//       newMessagesBody: ""


//     },
//     sidebar: {}
//   },


//   _callSubscriber() { },



//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },




//   dispatch(action) {

//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//     this._callSubscriber(this._state);
//   }
// }



// export default store;

// window.store = store;