"use client"
import { edit } from "@/app/action/todoaction"
import From from "../ui/From"
import Input from "../ui/Input"
import Button from "../ui/Button"
import { useState } from "react"
import { todoType } from "@/type/todoType"
import { BiEdit } from "react-icons/bi"


const EditTodo = ({todo}: {todo:todoType}) => {
    const [editTodo, setEditTodo] = useState(true)

    const handleEdit = () => {
        if(todo.completed === true) {
            return;
        }
        setEditTodo(!editTodo)
    };

    const handleSubmit = () => {
        setEditTodo(false)
    }

  return (
    <div className="flex gap-5 items-center flex-nowrap">
        <Button 
        onClick={handleEdit}
        text={<BiEdit />}
        actionButton
         />

         {!editTodo && (
            <From
            action={edit}
            onSubmit={handleSubmit}
            >
            <Input
            name="inputId"
            value={todo.id}
            type="hidden"
             />

             <Button type="submit" text="Save" />

             <div className="flex justify-center">
                <Input 
                type="text"
                name="newTitle"
                placeholder="Edit Todo..."
                />

             </div>

            </From>
         ) }
    </div>
  )
}

export default EditTodo
