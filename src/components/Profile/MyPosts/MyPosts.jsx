import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div>
      <div>Мои записи</div>
      <textarea cols="20" rows="2"></textarea>
      <button>Добавить запись</button>
      <div className={s.posts}>
        <Post massege='Hello' likesCount='17' />
        <Post massege='World' likesCount='19' />
        <Post massege='Its' likesCount='21' />
        <Post massege='Props' likesCount='23' />

      </div>


    </div>

  )
}

export default MyPosts;