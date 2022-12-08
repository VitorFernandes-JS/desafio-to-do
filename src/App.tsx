import { Header } from "./components/Header/Header";

import styles from "./App.module.css";
import "./global.css"; 

export function App() {
  return (
    <div className={styles.container}>
      <Header/>

      <div className={styles.app}>
        
        <main>
        <h1>Hello World</h1>
        </main>
      </div>
    </div>
  );
}
