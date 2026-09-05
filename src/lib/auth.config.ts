import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: { signIn: "/admin/login" },
  session: { strategy: "jwt" },
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isLoginPage = request.nextUrl.pathname === "/admin/login";

      if (isLoggedIn && isLoginPage) {
        return Response.redirect(new URL("/admin", request.nextUrl));
      }
      if (!isLoggedIn && !isLoginPage) {
        return false;
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
