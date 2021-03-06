import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  let postElement = props.posts
    .map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();


  let onAddPost = () => {
    props.addPost();



  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }



  return (
    <div>
      <div> <h3>Мои записи </h3></div>
      <textarea placeholder='Введите сообщение' onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      <div><button onClick={onAddPost}> Добавить запись</button></div>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>

  )
}

export default MyPosts;