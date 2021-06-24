import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem';
import Message from './Message/Message';

let dialogs = [
    { id: 1, name: 'Настя' },
    { id: 2, name: 'Егор' },
    { id: 3, name: 'Андрей' }
]

let messages = [
    { id: 1, message: 'Привет' },
    { id: 2, message: 'Как дела?' },
    { id: 3, message: 'Что делаешь?' }
]

let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />)

const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            < div className={s.dialogsItem}>
                {dialogElements
                }
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
}


export default Dialogs;