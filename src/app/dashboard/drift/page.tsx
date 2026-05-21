import { prisma } from "../../../lib/prisma";

export default async function Drift() {

  const alerts =
    await prisma.alert.findMany({

      where:{
        type:"DRIFT"
      },

      orderBy:{
        createdAt:"desc"
      }

    });

  return (

    <div>

      <h1 className="text-4xl font-bold">
        Security Drift
      </h1>

      <p className="text-zinc-500 mt-2">
        Newly discovered assets and changes
      </p>

      <div className="space-y-4 mt-8">

        {alerts.length===0 && (

          <div className="p-5 rounded-xl bg-zinc-900">
            No drift detected
          </div>

        )}

        {alerts.map((alert)=>(

          <div
            key={alert.id}
            className="
            bg-zinc-900
            border
            border-red-900
            p-5
            rounded-xl
            "
          >

            <h2 className="font-semibold">
              {alert.title}
            </h2>

            <p className="text-zinc-400 mt-2">
              Severity: {alert.severity}
            </p>

            <p className="text-zinc-600 text-sm mt-2">
              {new Date(
                alert.createdAt
              ).toLocaleString()}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}