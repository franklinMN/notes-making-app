import "./App.css";
import MainPage from "./pages/MainPage";
import { DataProvider } from "./services/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <MainPage />
      </DataProvider>
    </>
  );
}

export default App;
