import Header from "./layout/Header";
import Meals from "./layout/Meals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <main>
        <ToastContainer />
        <Header />
        <Meals />
      </main>
    </>
  );
}

export default App;
