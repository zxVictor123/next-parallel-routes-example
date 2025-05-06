import { addTodo,getTodos } from "@/actions";
import ClientButton from "@/components/ClientButton";

export default async function Home() {
  const todos = await getTodos()

  const userId = '8888888'

  const addTodoWithId = addTodo.bind(null,userId)
  return (
    <div>
      <div className="flex">
        <form action={addTodoWithId}>
          <input type="text" name="todo" className="border p-2 rounded-xl w-120"/>
          <button type="submit" className="bg-green-300 border p-2 ml-2">提交</button>
        </form>
        <ClientButton>🤠</ClientButton>
      </div>
      <ul className="leading-8 mt-4">
        {todos.map((todo,index) => <li key= {index}>{todo}</li>)}
      </ul>
    </div>
  );
}
