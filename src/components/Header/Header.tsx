import styles from "./Header.module.css"

import logoRocket from "../../assets/logo-rocket.svg"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoRocket} alt="Logo React" />
            <h1 className={styles.textTo}>to</h1><h1 className={styles.textDo}>do</h1>
        </header>
    );
}