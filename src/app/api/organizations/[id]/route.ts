import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
req: Request,
{ params }: { params: Promise<{id:string}> }
){

try{

const {id}=await params;

await prisma.organization.delete({

where:{
id
}

});

return NextResponse.json({

success:true

});

}catch(err){

console.log(err);

return NextResponse.json(
{error:"delete failed"},
{status:500}
);

}

}