'use server'

import { revalidatePath } from "next/cache"
import { sleep } from "@/app/utils/sleep"
import { z } from 'zod'

 
const schema = z.string().min(2, { message: "Must be 2 or more characters long" }).max(5, { message: "Must be 5 or fewer characters long"});

const data = ['吃饭','睡觉','打豆豆']

export async function getTodos() {
    return data
}


export async function addTodo(prevState: {message: string},formData: FormData) {
    await sleep(2000)
    const todo = formData.get('todo') as string
    const validatedFields = schema.safeParse(todo)
// Return early if the form data is invalid
if (!validatedFields.success) {
    return {
        message: validatedFields.error.flatten().formErrors.toString(),
    }
}
    data.push(todo)
    revalidatePath('/')
    return {
        prevState,
        message: `add ${todo} success !!!`
    }
}