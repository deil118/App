import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElement = props.posts
    .map  ( p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();


    let addPost = () => {
      let text = newPostElement.current.value;
     {props.addPost (text);
      newPostElement.current.value="";
  }
    }


  return (
    <div>
      <div> <h3>Мои записи </h3></div>
      <textarea ref={newPostElement}> </textarea>
      <div><button onClick ={ addPost }> Добавить запись</button></div>
      <div className={s.posts}>
      {postElement}   
      </div>
    </div>

  )
}

export default MyPosts;