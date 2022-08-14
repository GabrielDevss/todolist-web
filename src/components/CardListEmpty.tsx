import styles from "./CardListEmpty.module.css";
import clipboardSvg from "../assets/clipboard.svg";

export function CardListEmpty() {
  return (
    <div className={styles.content}>
      <img src={clipboardSvg} alt="image de uma prancheta de lista" />

      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
