import "./App.css";
import MainPage from "./pages/MainPage";
import { DataProvider } from "./services/DataContext";
import { useState, useEffect } from "react";

const App = () => {
  // if offline checking
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Handler to set the online status
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    // Add event listeners for online and offline events
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Cleanup the event listeners on unmount
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return (
    <>
      {!isOnline ? (
        <div className="offline-notice">
          <p>You are offline. Please check your internet connection.</p>
        </div>
      ) : (
        <DataProvider>
          <MainPage />
        </DataProvider>
      )}
    </>
  );
};

export default App;
