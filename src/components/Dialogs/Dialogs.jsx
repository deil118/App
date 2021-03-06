import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className={s.dialogs}>
            < div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messagesElements} </div>
            </div>
            <div>
                <div> <textarea placeholder='Введите сообщение'

                    value={newMessageBody}
                    onChange={onNewMessageChange} /> </div>
                <div>  <button onClick={onSendMessageClick} > Отправить</button> </div>
            </div>

        </div>
    )
}

export default Dialogs;