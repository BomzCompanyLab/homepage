import { NextRequest, NextResponse } from "next/server";
import menus from "./app/menus";

export default async function middleware (req: NextRequest) {
    const url = req.nextUrl.pathname;

    if( url === '/')    return;

    if( !menus.find(v=> v.url === url) ){
        // 404 페이지일 경우 첫화면으로 이동
        return NextResponse.redirect(new URL('/', req.url));
    }

}

export const config = {
    matcher :  ['/((?!_next|.*\\.png$).*)']
}