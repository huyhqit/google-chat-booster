import React from "react";
import { createRoot } from "react-dom/client";
import "./popup.css";

const App: React.FC<{}> = () => {
  const handleFill = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, "HANDLE_FILL_START", (status) => {
        console.log("response fill", status);
      });
    });
  };

  return (
    <div className="popup">
      <button className="button-fill" onClick={handleFill}>
        Fill
      </button>
    </div>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
