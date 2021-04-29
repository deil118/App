import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (

        <nav className={s.nav}>
            <div className={s.item}> <NavLink to="/profile" activeClassName={s.active}> Профиль  </NavLink></div>
            <div className={s.item}> <NavLink to="/dialogs" activeClassName={s.active}> Сообщения </NavLink></div>
            <div className={s.item}>  <NavLink to="/news" activeClassName={s.active}> Новости </NavLink></div>
            <div className={s.item}>  <NavLink to="/music" activeClassName={s.active}> Музыка </NavLink></div>
        </nav>
    )
}

export default Navbar;