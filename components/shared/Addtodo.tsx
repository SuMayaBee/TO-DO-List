import From from "../ui/From"
import Input from "../ui/Input"
import Button from "../ui/Button"
import { create } from "@/app/action/todoaction"



const Addtodo = () => {
  return (
    <From action={create} className="w-1/2 m-auto">
        <div className="flex">
            <Input
            name="input"
            type="text"
            placeholder="Add Todo..."
            />
            <Button
            type="submit"
            text="Add"
            />
        </div>
    </From>
    
  )
}

export default Addtodo
