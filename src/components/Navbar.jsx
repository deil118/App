import s from './Navbar.module.css';

const Navbar = () => {
    return (

        <nav className={s.nav}>
            <div className={s.item}>Профиль</div>
            <div className={s.item}>Друзья</div>
            <div className={s.item}>Сообщения</div>
            <div className={s.item}>Новости</div>
            <div className={s.item}>Музыка</div>
        </nav>
    )
}

export default Navbar;