import { NextRequest, NextResponse } from "next/server"
import db from "@/db"



// 分页查询
export async function GET(request: NextRequest) {
    
    // 获取参数
    const searchParams = request.nextUrl.searchParams
    const pagenum = Number(searchParams.get('pagenum')) || 1
    const pagesize = Number(searchParams.get('pagesize')) || 2
    const query = searchParams.get('query') || ''

    // 提前声明try中隔绝的外界需要的变量
    let filteredData = []
    let total = 0
    try {
        const data = db.data.posts

        // 从data中筛选出包含query的项（忽略大小写，忽略id）
        const cfilteredData = query ? data.filter(item => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const {id,...rest} = item
            return Object.values(rest).some(value => String (value).toLowerCase().includes(query.toLowerCase()))
        }): data

        // 计算数据量及起始索引及结束索引并最终计算出查找的数据返回给前端
        const ctotal = filteredData.length
        // 使变量不可重新赋值
        filteredData = cfilteredData
        total = ctotal
    }catch (error) {
        console.log('获取失败：',error)
        return NextResponse.json(
        {
            code: 400,
            message: '获取失败',
        },
        {
            status: 500,
        })
    }

    const startIndex = (pagenum - 1) * pagesize
    const endIndex = Math.min(startIndex + pagesize, total)

    filteredData = startIndex >= total ? [] : filteredData.slice(startIndex,endIndex)

    return NextResponse.json({
        code: 200,
        message: '获取成功',
        data: {
            total,
            list: filteredData
        }
    })
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