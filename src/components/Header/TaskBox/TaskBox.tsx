import styles from "./TaskBox.module.css";
import { Trash } from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function TaskBox() {
  const [checked, setChecked] = useState(false);

  console.log(checked);

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
        Arrumar o quarto Arrumar o quarto Arrumar o quarto Arrumar o quarto
        Arrumar o quarto Arrumar o quarto Arrumar o quarto Arrumar o quarto
      </span>
      <button className={styles.buttonDeleteTask} title="Deletar task">
        <Trash />
      </button>
    </div>
  );
}
