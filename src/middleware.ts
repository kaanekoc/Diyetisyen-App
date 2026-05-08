import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const { token } = req.nextauth;

    if (pathname.startsWith("/dietitian") && token?.role !== "DIETITIAN") {
      return NextResponse.redirect(new URL("/patient", req.url));
    }
    if (pathname.startsWith("/patient") && token?.role !== "PATIENT") {
      return NextResponse.redirect(new URL("/dietitian", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/login",
    }
  }
);

export const config = {
  matcher: ["/dietitian/:path*", "/patient/:path*"],
};
