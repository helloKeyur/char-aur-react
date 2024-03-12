import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoContextProvider } from "./context"

function App() {
  const [data, setData] = useState([]);

  // save data handler
  const saveHandler = (todo) => {
    setData((prev)=>[...prev, {id: Date.now(), ...todo}]);
  };

  // update data handler
  const updateHandler = (id, todo) => {
    setData((prev)=>
      prev.map((prevTodo)=>
        prevTodo.id === id ? todo : prevTodo));
  };

  // delete data handler
  const destroyHandler = (id) => {
    setData((prev)=>
      prev.filter((todo)=>
        todo.id!==id))
  };

  // activity status toggle handler
  const toggleStatusHandler = (id) => {
    setData((prev)=>
      prev.map((todo)=>
        todo.id === id ? {...todo, isActive: !todo.isActive}: todo))
  };

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setData(todos);
    }  
  }, []);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(data));
  },[data]);

  return (
    <>
      <TodoContextProvider value={{data, saveHandler, updateHandler, destroyHandler, toggleStatusHandler}}>
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                    {/* Todo form goes here */} 
                    <TodoForm />
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {/*Loop and Add TodoItem here */}
                    
                    {data.map((todo)=>
                      <div className="w-full" key={todo.id}>
                        <TodoItem todo={todo} />
                      </div>
                    )}
                </div>
            </div>
        </div>
      </TodoContextProvider>
    </>
  )
}

export default App
