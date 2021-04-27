import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <img src="https://static.ohotniki.ru/upload/ohotniki/475/02/32/85/DETAIL_PICTURE_653944_58858534.jpg" />
      <div className={s.item}>Профиль</div>
      <MyPosts />
    </div>




  )
}

export default Profile;