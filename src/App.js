import "./App.css";

function App() {
  return (
    <div className="main">
      <Header />
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <h1>Todo List</h1>
      <Search />
    </div>
  );
};

const Search = () => {
  return (
    <div>
      <input className="search" type="text" />
      <input className="button" type="submit" value="Do it" />
    </div>
  );
};

export default App;
