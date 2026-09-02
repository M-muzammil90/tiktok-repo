import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(){
        return NextResponse.next()
    },
    {
    callbacks:{
        authorized({ req , token }) {
        const {pathname} = req.nextUrl
        if(pathname.startsWith('/Api/auth')||
        pathname === "/login"||
        pathname === "/register"       
       )
       return true
       if(pathname === "/"|| pathname.startsWith("/Api/videos")){
       return true
       }
       return !!token
   }
    }
    }
    
)