import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { v4 as uuid } from 'uuid';

import { CardListEmpty } from "./components/CardListEmpty";
import { CardList } from "./components/CardList";

import logoSvg from "./assets/logo.svg";
import styles from "./App.module.css";

export interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: uuid(),
      title: newTaskText,
      isComplete: false,
    }

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  function handleCreateNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  } 

  function deleteTask(taskToDelete: string) {
    const tasksWithOutDeleteOne = tasks.filter(task => {
      return task.id !== taskToDelete;
    });

    setTasks(tasksWithOutDeleteOne);
  }

  const allTasks = tasks.length;

  return (
    <div className={styles.container}>
      <header>
        <img src={logoSvg} alt="logo marcar todo list" />
      </header>

      <form onSubmit={handleCreateNewTask} className={styles.addTask}>
        <input
          value={newTaskText}
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleCreateNewTaskChange} 
          required
        />
        <button type="submit">
          Criar
          <PlusCircle size={18} />
        </button>
      </form>

      <div className={styles.countContainer}>
        <div className={styles.firstCountTask}>
          <strong>Tarefas criadas</strong>
          <span>{allTasks}</span>
        </div>
        <div className={styles.countTask}>
          <strong>Concluidas</strong>
          <span>{0}</span>
        </div>
      </div>

      <div className={styles.content}>
    
    {  tasks.length ? 
      tasks.map(task => (
        <CardList key={task.id} id={task.id} title={task.title} 
        onDeleteTask={deleteTask} isComplete={false} />
  
      ))
      :
      <CardListEmpty />
      }

      </div>
    </div>
  );
}
