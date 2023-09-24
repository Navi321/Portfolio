import styles from  "./App.module.css"
import { Hero } from "./components/Navbar/Hero/hero";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
  <div className={styles.App}>
    <Navbar />
    <Hero />
  </div>
  );
}

export default App
