import { Header } from "./components/Header/Header";
import { PlusCircle } from "phosphor-react";

import styles from "./App.module.css";
import "./global.css";
import { TaskBox } from "./components/Header/TaskBox/TaskBox";

export function App() {
  return (
    <div className={styles.teste}>
      <Header />

      <div>
        <div className={styles.textareaAndButton}>
          <textarea
            className={styles.textarea}
            placeholder="Adicione uma nova tarefa"
          ></textarea>

          <button className={styles.buttonCreate}>
            <span>Criar</span>
            <PlusCircle size={16} weight="bold" />
          </button>
        </div>

        <div className={styles.informationsTask}>
          <span className={styles.tasksCreated}>Tarefas criadas <span className={styles.numberTasksCreated}>0</span></span>
          <span className={styles.completedTasks}>Concluídas <span className={styles.numberCompletedTasks}>0</span></span>
        </div>

        <div>
          <TaskBox />
        </div>
      </div>
    </div>
  );
}
