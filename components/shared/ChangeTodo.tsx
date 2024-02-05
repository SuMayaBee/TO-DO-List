import From from "../ui/From"
import Button from "../ui/Button"
import Input from "../ui/Input"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { changeStatus } from "@/app/action/todoaction"
import { todoType } from "@/type/todoType"



const ChangeTodo = ({todo}:{todo:todoType}) => {

    
  return (
    <From action={changeStatus}>
        <Input
        name="inputId"
        value={todo.id}
        type="hidden"
        />

        <Button
        actionButton
        type="submit"
        text={<AiOutlineCheckCircle />}
         />

    </From>
  )
}

export default ChangeTodo
