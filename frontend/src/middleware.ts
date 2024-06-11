import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let token = request.cookies.get("userToken");
  if (!token) return Response.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: [
    "/dashboard",
    "/karywan/:path*",
    "/produk/:path*",
    "/profil",
    "/riwayat-transaksi",
  ],
};
