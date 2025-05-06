'use server'

import { revalidatePath } from "next/cache"
import { sleep } from "@/app/utils/sleep"

const data = ['吃饭','睡觉','打豆豆']

export async function getTodos() {
    return data
}


export async function addTodo(userId: string,formData: FormData) {
    await sleep(2000)
    console.log(userId)
    const todo = formData.get('todo') as string
    data.push(todo)
    revalidatePath('/')
}