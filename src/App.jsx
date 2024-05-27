import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const subtractCount = () => {
    setCount((prev) => prev - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const styles = {
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "50px",
    },
    section: {
      margin: "10px 0",
    },
    button: {
      margin: "0 5px",
      padding: "10px",
      fontSize: "16px",
    },
    count: {
      fontSize: "20px",
      margin: "0 10px",
    },
  };

  return (
    <main style={styles.main}>
      <h1>예병수 튜터님 어차피 안보심</h1>
      <section style={styles.section}>
        <button style={styles.button} onClick={addCount}>
          +
        </button>
        <span style={styles.count}>{count}</span>
        <button style={styles.button} onClick={subtractCount}>
          -
        </button>
      </section>
      <section style={styles.section}>
        <button style={styles.button} onClick={resetCount}>
          reset
        </button>
      </section>
    </main>
  );
};

export default App;
