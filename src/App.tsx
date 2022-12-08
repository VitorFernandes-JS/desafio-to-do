import { Header } from "./components/Header/Header";
import { PlusCircle } from "phosphor-react";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.textareaAndButton}>
        <textarea
          className={styles.textarea}
          placeholder="Adicione uma nova tarefa"
        ></textarea>

        <button className={styles.buttonCreate}>
          <span className={styles.teste}>Criar</span>
          <PlusCircle size={16} weight="bold" />
        </button>
      </div>

      <div>
        <span>Tarefas criadas 0</span>
        <span>Concluídas 0</span>
      </div>

      <div>
        
      </div>
    </div>
  );
}
