import { NextResponse } from "next/server"
import { Params } from "./type"
import db from "@/db"


export async function DELETE(request:Request,{params}: {params: Params}) {
    await db.update(({posts}) => {
        const idx = posts.findIndex(item => item.id === params.id)
        posts.splice(idx,1)
    })
    return NextResponse.json(
        {
            code: 1,
            message: '删除成功'
        } 
    )
}