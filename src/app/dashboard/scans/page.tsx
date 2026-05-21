import { prisma }
from "../../../lib/prisma";

export default async function Scans(){

const scans=
await prisma.scan.findMany({

orderBy:{
createdAt:"desc"
}

});

return(

<div>

<h1
className="
text-4xl
font-bold
mb-8
"
>

Scan History

</h1>

<div
className="
space-y-4
"
>

{scans.map(scan=>(

<div
key={scan.id}
className="
bg-zinc-900
border
border-zinc-800
rounded-xl
p-5
"
>

<div>

Assets:
{scan.assetsFound}

</div>

<div>

Drift:
{scan.driftCount}

</div>

<div>

Status:
{scan.status}

</div>

<div
className="
text-zinc-500
mt-2
text-sm
"
>

{new Date(
scan.createdAt
).toLocaleString()}

</div>

</div>

))}

</div>

</div>

)

}