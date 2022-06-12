import styles from './Tasks.module.css';
import Clipboard from './Clipboard.png'
import Post from './Post';
import React from 'react';

function Tasks({tasks, handlerDeleteTasks, handlerDoneTask}) {

  let total = 0
  if (tasks.length > 0) {
     tasks.map((atual) => {
      if (atual.done === true) {
        return total += 1
      }
      return total; 
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.detailInfo}>
          <p>Tarefas criadas</p> 
          <p className={styles.count}>{tasks.length}</p>
        </div>
        <div className={styles.detailInfo}>
          <p>Concluídas</p> 
          <p className={styles.count} style={{ width: '100%'}}>{total} de {tasks.length} </p>
        </div>        
      </div>

      {        
        tasks.length === 0 ?
        <div className={styles.empty}>
          <img src={Clipboard} alt="" />
          <p style={{ color: '#808080', fontWeight: 600}}>Você ainda não tem tarefas cadastradas</p>
          <p style={{ color: '#808080'}}>Crie tarefas e organize seus itens a fazer</p>
        </div> :
          tasks.map((content) => {
            return <Post 
                      key={content.id} 
                      desc={content.desc} 
                      id={content.id}
                      done={content.done}
                      handlerDeleteTasks={handlerDeleteTasks} 
                      handlerDoneTask={handlerDoneTask}
                    />
          })      
      }
    </div>
  )
}

export default Tasks
