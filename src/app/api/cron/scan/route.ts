import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET() {
  try {

    const organizations =
      await prisma.organization.findMany();

    for(const org of organizations){

      await fetch(
        "http://localhost:3000/api/scans/start",
        {
          method:"POST",

          headers:{
            "Content-Type":"application/json"
          },

          body:JSON.stringify({
            organizationId:org.id
          })

        }
      );

    }

    return NextResponse.json({
      success:true,
      scanned:organizations.length
    });

  } catch {

    return NextResponse.json(
      {error:"cron failed"},
      {status:500}
    );

  }
}