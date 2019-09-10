import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
  const [dark, setDark] = useLocalStorage("dark", "App");
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "true");
  useEffect(() => {
    setDarkMode(!darkMode);
    document.querySelector(body)[0].classList.toggle("dark-mode");
  }, []);
}
