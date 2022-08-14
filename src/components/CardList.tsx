import { CheckCircle, Circle, Trash } from "phosphor-react";
import { TaskProps } from "../App";
import styles from "./CardList.module.css";

interface CardListProps extends TaskProps {
  onDeleteTask: (deleteTask: string) => void;
  onHandleToggle: (id: string) => void;
}

export function CardList({
  id,
  title,
  onDeleteTask,
  onHandleToggle,
  isComplete,
}: CardListProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function toggleTask() {
    onHandleToggle(id);
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.round}>
        <button onClick={toggleTask}>
          {isComplete == false ? (
            <Circle size={24} color={"#4EA8DE"} />
          ) : (
            <CheckCircle size={24} color={"#8284FA"} />
          )}
        </button>

        {isComplete ? <s>{title}</s> : <p>{title}</p>}
      </div>
      <button type="button" onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
