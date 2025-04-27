import { NextResponse } from "next/server"
import { Params } from "./type"
import db from "@/db"





// 删除逻辑
export async function DELETE(request:Request,{params}: {params: Params}) {
    try {
        await db.update(({posts}) => {
            const idx = posts.findIndex(item => item.id === params.id)
            posts.splice(idx,1)
        })
        return NextResponse.json(
            {
                code: 200,
                message: '删除成功'
            } 
        )
    }catch (error) {
        console.log('删除失败：',error)
        return NextResponse.json(
            {
                code: 400,
                message: "删除失败"
            }
        )
    }
}
// 修改逻辑
export async function PATCH(request: Request,{params}:{params: Params}) {
    try {
        const data = await request.json()
        await db.update (({posts}) => {
            const idx = posts.findIndex(item => item.id === params.id)
            posts[idx] = {...posts[idx],...data}
        })
        return NextResponse.json(
            {
                code: 200,
                message: "修改成功"
            }
        )
    }catch (error) {
        console.log('修改失败：',error)
        return NextResponse.json(
            {
                code: 400,
                message: "修改失败"
            }
        )
    }
}
// 查找逻辑
export async function GET(request: Request,{params}: {params: Params}) {
    try {
        const post = db.data.posts.find(item => item.id === params.id)
        return NextResponse.json(
            {
                code: 200,
                message: "查找成功",
                data: post
            }
        )
    }catch (error) {
        console.log('查找失败：',error)
        return NextResponse.json(
            {
                code: 400,
                message: "查找失败"
            }
        )
    }
}