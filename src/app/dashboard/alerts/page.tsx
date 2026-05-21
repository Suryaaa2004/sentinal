import { prisma } from "../../../lib/prisma";

export default async function Alerts() {

const alerts=
await prisma.alert.findMany({

orderBy:{
createdAt:"desc"
}

})

return(

<div>

<h1 className="text-4xl font-bold">
Alerts
</h1>

<div className="space-y-4 mt-8">

{alerts.map((alert: any)=>(

<div
key={alert.id}
className="bg-red-950 border border-red-800 p-5 rounded-xl"
>

<div className="font-bold">
{alert.title}
</div>

<div className="text-red-300 mt-2">

Severity:
{alert.severity}

</div>

</div>

))}

</div>

</div>

)

}