const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY ';
const SEND_MESSAGE = 'SEND-MESSAGE';


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
}


export const sandMessgaeCreator = () => ({ type: 'SEND-MESSAGE' })
export const updateNewMessageBodyCreator = (body) =>
  ({ type: 'UPDATE-NEW-MESSAGE-BODY', body: body })

export default dialogsReducer;