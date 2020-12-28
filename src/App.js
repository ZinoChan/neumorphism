import { useState } from "react";

import AppRoute from "./routes/AppRoute";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  // const toggleTheme = () => {
  //   document.querySelector("html").classList.toggle("dark");
  //   setDarkTheme(!darkTheme);
  // };
  return (
    <main className='overflow-x-hidden min-h-screen min-w-screen bg-light-theme dark:bg-dark-theme transition-all duration-150'>
      <AppRoute darkTheme={darkTheme} />
    </main>
  );
}

export default App;
