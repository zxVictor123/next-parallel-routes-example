import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname,'hahaha')
}

export const config = {
    matcher: ['/about/:path*','/dashboard/:path*']
}