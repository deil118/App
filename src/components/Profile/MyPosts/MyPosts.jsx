import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div>
      <div> <h3>Мои записи </h3></div>
      <textarea cols="20" rows="2"></textarea>
      <div><button>Добавить запись</button></div>
      <div className={s.posts}>
        <Post massege='Hello' likesCount='17' />
        <Post massege='World' likesCount='19' />
    

      </div>


    </div>

  )
}

export default MyPosts;