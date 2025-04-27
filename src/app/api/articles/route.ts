import { NextRequest, NextResponse } from "next/server"
import db from "@/db"


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const pagenum = Number(searchParams.get('pagenum')) || 1
    const pagesize = Number(searchParams.get('pagesize')) || 2
    const query = searchParams.get('query') || ''

    const data = db.data.posts

    let filteredData = query ? data.filter(item => {
        const {id,...rest} = item
        return Object.values(rest).some(value => String (value).toLowerCase().includes(query.toLowerCase()))
    }): data

    const total = filteredData.length

    const startIndex = (pagenum - 1) * pagesize
    const endIndex = Math.min(startIndex + pagesize, total)
}



export async function POST(request:Request) {
    try {
        const data = await request.json()
        await db.update(({posts}) => posts.unshift({
            id: Math.random().toString(36).slice(-8),
            ...data
        }))
        return NextResponse.json(
            {
                code: 200,
                message: '添加成功',
                data
            }
        )
    }catch (error) {
        console.log('添加失败',error)
        return NextResponse.json(
            {
                code: 400,
                message: '添加失败',
            }
        )
    }
}