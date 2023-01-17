import { Header } from "./components/Header/Header";
import { ClipboardText, PlusCircle } from "phosphor-react";

import styles from "./App.module.css";
import "./global.css";
import { TaskBox } from "./components/Header/TaskBox/TaskBox";
import { useState, FormEvent } from "react";

export function App() {
  const [task, setTask] = useState([""]);
  const [newTask, setNewText] = useState("");
  const [checked, setChecked] = useState("");

  let variableNumberTasksCreated = task.length;
  let numberCompletedTasks = 0;

  const isChecked = (checked: any) => {
    setChecked(checked)
  };

  // if (checked == true) {
  //   numberCompletedTasks = numberCompletedTasks + 1;
  // } else {
  //   numberCompletedTasks = 0;
  // }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault(); // previne o comportamento padrão do form, que é recarregar a página
    if (newTask.trim() === "") {
      return;
    }
    setTask([...task, newTask]); // adiciona um novo comentário
    setNewText(""); // limpa o input
  }

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
                {numberCompletedTasks} de {variableNumberTasksCreated}
              </span>
            </span>
          </div>
        </form>
        {task.length === 0 && (
          <div className={styles.noTasks}>
            <ClipboardText size={32} className={styles.iconList} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
        <div>
          {task.map((content) => {
            return (
              <TaskBox key={content} task={content} onDeleteTask={deleteTask} isChecked={isChecked} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
