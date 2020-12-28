import { useState } from "react";

import AppRoute from "./routes/AppRoute";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  // const toggleTheme = () => {
  //   document.querySelector("html").classList.toggle("dark");
  //   setDarkTheme(!darkTheme);
  // };
  return (
    <main className='min-h-screen min-w-screen bg-light-theme dark:bg-dark-theme transition-all duration-150'>
      <div className='max-w-screen-2xl mx-auto px-6 min-h-screen'>
        <AppRoute darkTheme={darkTheme} />
      </div>
    </main>
  );
}

export default App;
