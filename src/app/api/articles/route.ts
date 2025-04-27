import { NextResponse } from "next/server"
import db from "@/db"

export async function POST(request:Request) {
    try {
        const data = await request.json()
        await db.update(({posts}) => posts.unshift({
            id: Math.random().toString(36).slice(-8),
            ...data
        }))
        return NextResponse.json(
            {
                code: 0,
                message: '添加成功',
                data
            }
        )
    }catch (error) {
        console.log('请求失败',error)
    }
}