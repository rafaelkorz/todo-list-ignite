import styles from './Post.module.css';
import trash from './trash.png'
import React from 'react';

function Post({desc, id, done, handlerDeleteTasks, handlerDoneTask}) {

  return (
    <>
      <div className={styles.container}>
        <input 
          type="checkbox" 
          name="interesse" 
          onClick={() => handlerDoneTask(id)} 
        />
        {
          done == true ? 
          <p style={{width: '632px', height: 'auto', color: '#808080', textDecoration: 'line-through'}}>{desc}</p> :
          <p style={{width: '632px', height: 'auto', color: '#F2F2F2'}}>{desc}</p>
        }
        
        <img 
          style={{cursor: 'pointer'}} 
          onClick={() => handlerDeleteTasks(id)} 
          src={trash} 
          alt="trash" 
        />
      </div>
    </>
  )
}

export default Post
