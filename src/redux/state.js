
let store = {
  _state : {
    profilePage:
     { posts :[
      { id: 1, message: 'Привет', likesCount: 12 },
      { id: 2, message: 'Хеллоу?' ,likesCount: 13},
      { id: 3, message: 'Йоу',likesCount: 15 }
      
    ],
    newPostText: ""
    
  },
  
  
  dialogsPage: {
     messages : [
    { id: 1, message: 'Привет' },
    { id: 2, message: 'Как дела?' },
    { id: 3, message: 'Что делаешь?' }
  ],
  dialogs :[
    { id: 1, name: 'Настя' },
    { id: 2, name: 'Вадим' },
    { id: 3, name: 'Андрей' }
  ]
  },
},
_callSubscriber() {

},


getState() {
  return this._state;
},
subscribe (observer)  {
  this._callSubscriber = observer;
},


dispatch (action) {
  if (action.type === 'ADD-POST') {
    let newPost = {
      id: 5 ,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    } ;
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  }  else if  (action.type === 'UPDATE-NEW-POST-TEXT') {
    this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state);
  } else if  (action.type === 'ADD-MESSAGE') {
    let newMessage = {
      id:5 ,
      message: this._state.dialogPage.messages,
  
    }
    this._state.dialogsPage.messages.push(newMessage);
    this._callSubscriber(this._state);
  }

}

}




export default store;

window.store = store;