import styles from "./TaskBox.module.css";
import { Trash } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface TaskBoxProps {
  task: string;
  onDeleteTask: (deleteTask: string) => void;
}

export function TaskBox({task, onDeleteTask}: TaskBoxProps) {
  const [checked, setChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(task);
  }

  return (
    <div className={styles.container}>
      <Checkbox.Root
        checked={checked}
        onCheckedChange={(checked) => {
          if (checked === true) {
            setChecked(true);
          } else {
            setChecked(false);
          }
        }}
        className={styles.checkboxRoot}
      >
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <span className={checked === !true ? styles.textTask : styles.textTaskLineThrough}>
        {task}
      </span>
      <button onClick={handleDeleteTask} className={styles.buttonDeleteTask} title="Deletar task">
        <Trash />
      </button>
    </div>
  );
}
