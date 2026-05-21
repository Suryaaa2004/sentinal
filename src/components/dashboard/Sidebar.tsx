"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
LayoutDashboard,
Globe,
ShieldAlert,
FileWarning,
History,
Search,
Activity,
Building2
}
from "lucide-react";

const items=[

{
name:"Overview",
href:"/dashboard",
icon:LayoutDashboard
},

{
name:"Organizations",
href:"/dashboard/organizations",
icon:Building2
},

{
name:"Assets",
href:"/dashboard/assets",
icon:Globe
},

{
name:"Subdomains",
href:"/dashboard/subdomains",
icon:Search
},

{
name:"Alerts",
href:"/dashboard/alerts",
icon:ShieldAlert
},

{
name:"Certificates",
href:"/dashboard/certificates",
icon:FileWarning
},

{
name:"Scans",
href:"/dashboard/scans",
icon:History
},

{
name:"Drift",
href:"/dashboard/drift",
icon:Activity
}

];

export default function Sidebar(){

const pathname=
usePathname();

return(

<div
className="
w-72
h-screen
sticky
top-0
bg-zinc-950
border-r
border-zinc-800
p-6
flex
flex-col
"
>

<div
className="
mb-10
"
>

<h1
className="
text-2xl
font-black
bg-gradient-to-r
from-red-500
to-orange-500
bg-clip-text
text-transparent
"
>

SentinelASM

</h1>

<p
className="
text-zinc-500
text-sm
mt-1
"
>

Security Drift Monitor

</p>

</div>

<div
className="
space-y-2
flex-1
"
>

{items.map((item)=>{

const Icon=
item.icon;

const active=
pathname===item.href;

return(

<Link

key={item.href}

href={item.href}

className={`

flex
items-center
gap-4
p-4
rounded-2xl
transition-all
duration-300

${active

?`
bg-red-950
border
border-red-800
text-white
shadow-lg
shadow-red-950/50
`

:`
text-zinc-400
hover:bg-zinc-900
hover:text-white
`
}

`}

>

<Icon
size={20}
/>

<div>

<div
className="
font-medium
"
>

{item.name}

</div>

</div>

</Link>

)

})}

</div>


<div
className="
border-t
border-zinc-800
pt-5
text-sm
text-zinc-500
"
>

Monitoring Active

</div>

</div>

)

}