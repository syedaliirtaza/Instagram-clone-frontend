import react from "react";
import './App.css';
import Header from "./Header";
import RightSidebar from "./RightSidebar";
import MainPost from "./MainPost";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
      <MainPost />
      <RightSidebar />
      </div>
    </div>
  );
}

export default App;
