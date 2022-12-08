import styles from './TaskBox.module.css';
import { Trash } from 'phosphor-react';

export function TaskBox() {
    return(
        <div className={styles.container}>
            <input type="checkbox" />
            <h1>Arrumar o quarto</h1>
            <Trash />
        </div>
    )
}