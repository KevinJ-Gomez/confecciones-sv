import { NextResponse } from "next/server";

export function proxy(request) {
    if (request.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/es", request.url));
    }
}

export const config = {
    matcher: ["/"],
};