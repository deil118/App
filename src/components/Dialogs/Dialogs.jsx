import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';




const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />)

    let newMessagEelement = React.createRef();

    let addMessage = () => {
        let message = newMessagEelement.current.value;
        {
            props.addMessage(message);
            newMessagEelement.current.value = "";
        }
    }


    return (
        <div className={s.dialogs}>
            < div className={s.dialogsItem}>
                <div>

                </div>
                {dialogElements
                }
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newMessagEelement} />
                <button onClick={addMessage}> Отправить</button>
            </div>

        </div>
    )
}

export default Dialogs;