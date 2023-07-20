const { NextResponse } = require("next/server")

export  const POST  = async (request)=>{
    const res = new NextResponse(
         JSON.stringify({
            message:'Logout sucessfully'
         })
    );
    res.cookies.set('jwt-token','',{
        expires: new Date(Date.now())
    })
    return res;
}