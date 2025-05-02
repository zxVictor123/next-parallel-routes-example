import { NextResponse } from "next/server"

const data = ['吃饭','睡觉','打豆豆']


export async function GET() {
    console.log('当前数据:', data)
    return NextResponse.json({data})
}

export async function POST(request:Request) {
    const formData = await request.formData()
    const todo = formData.get('todo') as string
    data.push(todo)
    console.log('添加后的数据:', data)
    return NextResponse.json({data})
}