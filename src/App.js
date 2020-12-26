import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    document.querySelector("html").classList.toggle("dark");
    setDarkTheme(!darkTheme);
  };
  return (
    <main className='min-h-screen min-w-screen bg-light-theme dark:bg-dark-theme'>
      <div className='max-w-screen-2xl mx-auto px-6 min-h-screen'>
        <Home darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </div>
    </main>
  );
}

export default App;
