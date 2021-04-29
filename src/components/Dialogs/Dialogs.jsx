import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (

        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
    ;

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


const Dialogs = (props) => {
    return (

        <div className={s.dialogs}>
            < div className={s.dialogsItem}>
                <DialogItem name="Настя" id="1" />
                <DialogItem name="Андрей" id="2" />
                <DialogItem name="Егор" id="3" />
            </div>

            <div className={s.messages}>
                <Message message="Привет" />
                <Message message="Как дела?" />
                <Message message="Что делаешь?" />
            </div>

        </div>
    )
}


export default Dialogs;