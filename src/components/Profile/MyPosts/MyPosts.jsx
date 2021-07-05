import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

 

    let postElement = props.posts
    .map  ( p => <Post message={p.message} likesCount={p.likesCount}/>)


  return (
    <div>
      <div> <h3>Мои записи </h3></div>
      <textarea cols="20" rows="2"></textarea>
      <div><button>Добавить запись</button></div>
      <div className={s.posts}>
      {postElement}   
      </div>
    </div>

  )
}

export default MyPosts;