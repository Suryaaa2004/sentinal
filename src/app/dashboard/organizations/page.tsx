import { prisma }
from "../../../lib/prisma";

import AddOrganization
from "../../../components/dashboard/AddOrganization";

import DeleteOrgButton
from "../../../components/dashboard/DeleteOrgButton";

export default async function Organizations(){

const organizations=
await prisma.organization.findMany();

return(

<div>

<h1
className="
text-4xl
font-bold
mb-8
"
>

Organizations

</h1>

<AddOrganization/>

<div
className="
space-y-5
mt-10
"
>

{organizations.map(org=>(

<div

key={org.id}

className="
bg-zinc-900
border
border-zinc-800

rounded-2xl
p-6

hover:border-red-700
transition
"

>

<div
className="
flex
justify-between
items-center
"
>

<div>

<h2
className="
font-bold
text-xl
"
>

{org.name}

</h2>

<p
className="
text-zinc-500
mt-1
"
>

{org.domain}

</p>

</div>


<DeleteOrgButton
id={org.id}
/>

</div>

</div>

))}

</div>

</div>

)

}