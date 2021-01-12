import HeaderSection from "./components/HeaderSection";
import FilterSection from "./components/FilterSection";
import TasksSection from "./components/TasksSection";
import "./App.css";

function App() {
  return (
    <div className="main">
      <HeaderSection />
      <FilterSection />
      <TasksSection />
    </div>
  );
}

export default App;
