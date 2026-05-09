import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import LoadingScreen from "./Components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <LoadingScreen />;
  return <Layout />;
}

export default App;
