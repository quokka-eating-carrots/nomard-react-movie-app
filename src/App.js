import Button from "./Button";
import styles from './App.module.css'


function App() {
  return (
    <div>
      <h1 className={styles.title}>Hi!</h1>
      <Button text="이건 버튼이묘" />
    </div>
  );
}

export default App;
