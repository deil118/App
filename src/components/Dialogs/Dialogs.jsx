import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';




const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />)

    let newMessageelement = React.createRef();

    let addMesage = () => {
        let message = newMessageelement.current.value;
        {alert (message)};

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
            <textarea ref={newMessageelement} className="textareaMeesage" cols="40" rows="2"></textarea> 
             <button onClick= {addMesage}> Отправить</button>
            </div>
        
        </div>
    )
}

export default Dialogs;