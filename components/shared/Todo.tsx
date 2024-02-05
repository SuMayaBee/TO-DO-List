import { todoType } from "@/type/todoType";
import ChangeTodo from "./ChangeTodo"
import EditTodo from "./EditTodo";
import DelectTodo from "./DelectTodo";



const Todo = ({todo}: {todo:todoType}) => {

    const todoStyle = {
        textDecoration: todo.completed === true ? "line-through" : "none",
        opacity: todo.completed === true ? 0.5 : 1,
    };

  return (
    <div className="w-full flex items-center justify-between 
    bg-white py-3 px-20 rounded-2xl"
    style={todoStyle}>
        <ChangeTodo todo={todo}/>
      <span className="text-center font-bold uppercase">
        {todo.title}
      </span>

      <div className="flex items-center gap-5">
         <EditTodo todo={todo} />
         <DelectTodo todo={todo} />
      </div>


    </div>
  )
}

export default Todo
