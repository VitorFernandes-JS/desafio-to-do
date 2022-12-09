import { Header } from "./components/Header/Header";
import { PlusCircle } from "phosphor-react";

import styles from "./App.module.css";
import "./global.css";
import { TaskBox } from "./components/Header/TaskBox/TaskBox";
import { useState, FormEvent } from "react";

export function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewText] = useState("");

  let variableNumberTasksCreated = task.length;
  let numberCompletedTasks = 0;
  
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault(); // previne o comportamento padrão do form, que é recarregar a página
    if (newTask.trim() === "") {
      return;
    }
    setTask([...task, newTask]); // adiciona um novo comentário
    console.log(task);
    setNewText(""); // limpa o input
  };

  function deleteTask(taskToDelete: string) {
    setTask(task.filter((task) => task !== taskToDelete));
  }

  return (
    <div className={styles.container}>
      <Header />

      <div>
        <form onSubmit={handleCreateNewTask}>
          <div className={styles.textareaAndButton}>
            <textarea
              value={newTask}
              onChange={(event) => setNewText(event.target.value)}
              maxLength={70}
              minLength={1}
              className={styles.textarea}
              placeholder="Adicione uma nova tarefa"
            ></textarea>

            <button className={styles.buttonCreate} type="submit">
              <span>Criar</span>
              <PlusCircle size={16} weight="bold" />
            </button>
          </div>

          <div className={styles.informationsTask}>
            <span className={styles.tasksCreated}>
              Tarefas criadas{" "}
              <span className={styles.numberTasksCreated}>
                {variableNumberTasksCreated}
              </span>
            </span>
            <span className={styles.completedTasks}>
              Concluídas{" "}
              <span className={styles.numberCompletedTasks}>
                0 de {variableNumberTasksCreated}
              </span>
            </span>
          </div>
        </form>

        <div>
          {task.map((content) => {
            return (
              <TaskBox key={content} task={content} onDeleteTask={deleteTask} isChecked={false} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
