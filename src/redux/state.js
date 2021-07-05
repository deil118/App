

let state = {
  profilePage: { posts :[
    { id: 1, message: 'Привет', likesCount: 12 },
    { id: 2, message: 'Хеллоу?' ,likesCount: 13},
    { id: 3, message: 'Йоу',likesCount: 15 }
  ],
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
}


export default state;