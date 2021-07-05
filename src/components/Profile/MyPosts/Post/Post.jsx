import s from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0W9whme6ApcclKD1q4NEmSY8WaodIjDBL2A&usqp=CAU" /></div>
          <div>  {props.message}</div>
      <span>{props.likesCount} Like </span>

    </div>





  )
}

export default Post;