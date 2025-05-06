import {getTodos } from "@/actions";
import SubmitForm from "@/components/SubmitForm";

export default async function Home() {
  const todos = await getTodos()

  

  
  return (
    <div>
      <SubmitForm/>
      <ul className="leading-8 mt-4">
        {todos.map((todo,index) => <li key= {index}>{todo}</li>)}
      </ul>
    </div>
  );
}
