"use client"
import { deleteTodo } from "@/app/action/todoaction"
import Button from "../ui/Button"
import From from "../ui/From"
import Input from "../ui/Input"
import { todoType } from "@/type/todoType"
import { BsFillTrashFill } from "react-icons/bs"



const DelectTodo = ({todo}:{todo:todoType}) => {
  return (
    <From action={deleteTodo}>
        <Input 
        type="hidden"
        name="inputId"
        value={todo.id}
        />

        <Button 
        actionButton
        text={<BsFillTrashFill />}
        type="submit"
        />
    </From>
  )
}

export default DelectTodo
