import { Trash } from "phosphor-react";
import { useState } from "react";
import { TaskProps } from '../App';
import styles from "./CardList.module.css";

interface CardListProps extends TaskProps {
  onDeleteTask: (deleteTask: string) => void;
}

export function CardList({ id, title, onDeleteTask }: CardListProps) {
  const [isChecked, setIsChecked ] = useState(false);
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.round}>
        <input type="checkbox" id="checkbox" onClick={() => setIsChecked(!isChecked)} defaultChecked={isChecked}/>
        <label htmlFor="checkbox"></label>
      </div>

    { isChecked ?  <s>{title}</s> : <p>{title}</p>}
      <button type="button" onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
