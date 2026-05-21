import { prisma } from "../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(
req:Request
){

try{

const body=
await req.json();

await prisma.organization.create({

data:{

name:
body.name,

domain:
body.domain

}

});

return NextResponse.json({
success:true
});

}catch(err){

console.log(err);

return NextResponse.json(
{error:"creation failed"},
{status:500}
);

}

}