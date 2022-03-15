import styles from "./App.module.css";
import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Show Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </main>
  );
};

export default App;
