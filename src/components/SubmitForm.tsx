"use client";

import { addTodo } from "@/actions";
import React from "react";
import { useFormState } from "react-dom";
import SubmitButton from "./SubmitButton";
import ClientButton from "./ClientButton";

const initialState = {
  message: "",
};
function SubmitForm() {
  const [state, formAction] = useFormState(addTodo, initialState);
  return (
    <>
      <div className="flex">
        <form action={formAction}>
          <input
            type="text"
            name="todo"
            className="border p-2 rounded-xl w-120"
          />
          <SubmitButton />
        </form>
        <ClientButton>🤠</ClientButton>
      </div>
      <p className="text-green-400">{state.message}</p>
    </>
  );
}

export default SubmitForm;
