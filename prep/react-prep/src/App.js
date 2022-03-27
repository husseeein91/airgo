import Todos from "./features/todos/Todos";
function App() {
  return (
    <div className="text-center mx-auto container">
      <h2 className="App text-4xl text-stone-900 my-4 font-bold">
        Welcome to my TODO!
      </h2>
      <Todos />
    </div>
  );
}

export default App;
