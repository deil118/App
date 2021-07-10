import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { sandMessgaeCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sandMessgaeCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
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

                    value={props.newMessageBody}
                    onChange={onNewMessageChange} /> </div>
                <div>  <button onClick={onSendMessageClick} > Отправить</button> </div>
            </div>

        </div>
    )
}

export default Dialogs;