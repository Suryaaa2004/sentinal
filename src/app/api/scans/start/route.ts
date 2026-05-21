import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { runSubfinder } from "../../../../../worker/subfinder";

export async function POST(req: Request) {
  try {

    const body =
      await req.json();

    const org =
      await prisma.organization.findUnique({

        where:{
          id:body.organizationId
        }

      });

    if(!org){

      return NextResponse.json(
        {
          error:
          "Organization not found"
        },
        {
          status:404
        }
      );

    }

    // STEP 1 — Discover assets

    const assets =
      await runSubfinder(
        org.id,
        org.domain
      ) as string[];


    // STEP 2 — save assets linked to org

   await prisma.asset.deleteMany({

  where:{

    OR:[

      {
        organizationId:
        org.id
      },

      {
        domain:{
          contains:
          org.domain
        }
      }

    ]

  }

});

    await prisma.asset.createMany({

      data:

      assets.map(asset=>({

        domain:asset,

        organizationId:
        org.id

      })),

      skipDuplicates:true

    });


    // STEP 3 — Run nuclei

    const {
      runNuclei
    } =
    await import(
      "../../../../../worker/nuclei"
    );

    const findings =
      await runNuclei(
        assets
      );


    // STEP 4 — Previous snapshot

    const previous =
      await prisma.snapshot.findFirst({

        where:{
          organizationId:
          org.id
        },

        orderBy:{
          createdAt:
          "desc"
        }

      });


    const previousAssets =
      (previous?.assets as string[])
      || [];


    // STEP 5 — Detect drift

    const newAssets =
      assets.filter(

        asset=>

        !previousAssets.includes(
          asset
        )

      );


    // STEP 6 — AI summary

    const {
      generateSummary
    } =
    await import(
      "../../../../lib/aiSummary"
    );

    const summary =
      await generateSummary(
        newAssets
      );


    // STEP 7 — Email sender

    const {
      sendDriftEmail
    } =
    await import(
      "../../../../lib/email"
    );


    // STEP 8 — Alerts + notify

    for(
      const asset
      of newAssets
    ){

      await prisma.alert.create({

        data:{

          title:
          "New Attack Surface Detected",

          description:
          `New asset discovered: ${asset}`,

          severity:
          "HIGH",

          type:
          "DRIFT"

        }

      });

      await sendDriftEmail(

        "your-email@gmail.com",

        "Security Drift Detected",

        summary || ""

      );

    }


    // STEP 9 — Save snapshot

    await prisma.snapshot.create({

      data:{

        organizationId:
        org.id,

        assets

      }

    });


    // STEP 10 — Save scan history

    await prisma.scan.create({

      data:{

        organizationId:
        org.id,

        assetsFound:
        assets.length,

        driftCount:
        newAssets.length,

        status:
        "COMPLETED"

      }

    });


    return NextResponse.json({

      success:true,

      found:assets,

      findings,

      driftDetected:
      newAssets.length,

      newAssets,

      summary

    });

  } catch(err){

    console.log(err);

    return NextResponse.json(
      {
        error:"scan failed"
      },
      {
        status:500
      }
    );

  }

}