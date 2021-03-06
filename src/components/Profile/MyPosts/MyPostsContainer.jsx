import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
debugger;
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();
          let addPost = () => {
            store.dispatch(addPostActionCreator());
          }
          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text);
           store.dispatch(action);
          }
           return (
           <MyPosts updateNewPostText={onPostChange}
            addPost={addPost}
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText} />
   ) }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;