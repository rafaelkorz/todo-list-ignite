import { useState } from 'react';
import styles from './NewTask.module.css';
import plus from './plus.png'
import Tasks from './Tasks';
import React  from 'react';
import { v4 as uuid } from 'uuid';

function NewTask() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);


  function handlerNewTaskChange(event) {
    setNewTask(event.target.value)
  }

  function handleCreateNewTask(event) {
    event.preventDefault();
    const createTask = {
      id: uuid(),
      desc: newTask,
      done: false
    } 

    setTasks([...tasks, createTask])    
  }

  function handlerDeleteTasks(id) {
    const postUpdated = tasks.filter(post => {
      return post.id !== id
    })
    setTasks(postUpdated);    
  }

  function handlerDoneTask(id) {    
    const postUpdated = tasks.map(post => {
        if (post.id === id) {
          post.done = !post.done
          return post
        }
        return post        
      })      
    setTasks(postUpdated);    
  }

  return (
    <div>
      <div className={styles.container}>
        <form onSubmit={handleCreateNewTask} style={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
          <input className={styles.input}                
                onChange={handlerNewTaskChange}
                type="text" 
                placeholder='Adicione uma nova tarefa'
          />
          <button type='submit'                  
                  className={styles.button}>Criar<img src={plus} alt="Add task"/>
          </button>
        </form>
      </div>

      <Tasks 
        tasks={tasks} 
        handlerDeleteTasks={handlerDeleteTasks}
        handlerDoneTask={handlerDoneTask}
      />  
    </div>
  )
}

export default NewTask
