import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
  let postElement = props.posts
    .map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();


  let addPost = () => {
      props.dispatch(addPostActionCreator ()) ;
      
    
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch( action );
  }

  

  return (
    <div>
      <div> <h3>Мои записи </h3></div>
      <textarea placeholder='Введите сообщение' onChange={onPostChange} ref={newPostElement}  value={props.newPostText} /> 
      <div><button   onClick={addPost}> Добавить запись</button></div>
      <div className={s.posts}>
        {postElement}
      </div>
    </div>

  )
}

export default MyPosts;