import AppRoutes from "./routes/index";
import Navbar from "./components/navbar";
import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;